import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";
import { loginMessageOk, verifyKleverSignature } from "./verify.ts";

const ADDRESS_RE = /^klv1[02-9ac-hj-np-z]{58}$/;
const TOKEN_RE = /^[0-9a-f]{64}$/;
const TOKEN_MS = 7 * 24 * 60 * 60 * 1000;
const MAX_BODY = 300_000;
const MAX_GARDEN = 262144;

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status });
}

function hex(bytes: Uint8Array): string {
  return [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return hex(new Uint8Array(digest));
}

type Admin = {
  from: (table: string) => any;
  rpc: (fn: string, args: Record<string, unknown>) => Promise<{ data: unknown; error: { message?: string } | null }>;
};

async function sessionAddress(admin: Admin, token: unknown): Promise<string | Response> {
  if (typeof token !== "string" || !TOKEN_RE.test(token)) return json({ error: "Sign in with Klever again." }, 401);
  const tokenHash = await sha256Hex(token);
  const { data, error } = await admin
    .from("grower_sessions")
    .select("address, expires_at")
    .eq("token_hash", tokenHash)
    .maybeSingle();
  if (error) return json({ error: "The garden could not be opened." }, 503);
  const row = data as { address?: string; expires_at?: string } | null;
  if (!row?.address || !row.expires_at || Date.parse(row.expires_at) <= Date.now()) {
    return json({ error: "Sign in with Klever again." }, 401);
  }
  return row.address;
}

function sanitizeGarden(value: unknown, now: number): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const garden: Record<string, unknown> = { ...(value as Record<string, unknown>) };
  let savedAt = Number(garden.savedAt);
  if (!Number.isFinite(savedAt)) savedAt = now;
  if (savedAt > now + 5 * 60 * 1000) savedAt = now;
  if (savedAt < 0) savedAt = 0;
  garden.savedAt = Math.floor(savedAt);
  if (JSON.stringify(garden).length > MAX_GARDEN) return null;
  return garden;
}

async function auth(admin: Admin, body: Record<string, unknown>): Promise<Response> {
  const address = typeof body.address === "string" ? body.address : "";
  const message = typeof body.message === "string" ? body.message : "";
  const signature = typeof body.signature === "string" ? body.signature : "";
  if (!ADDRESS_RE.test(address) || !loginMessageOk(message, address) || !verifyKleverSignature(message, signature, address)) {
    return json({ error: "The Klever signature was not accepted." }, 401);
  }

  await admin.from("grower_sessions").delete().lt("expires_at", new Date().toISOString());

  const token = hex(crypto.getRandomValues(new Uint8Array(32)));
  const expiresAt = new Date(Date.now() + TOKEN_MS).toISOString();
  const { error } = await admin.from("grower_sessions").insert({
    token_hash: await sha256Hex(token),
    address,
    expires_at: expiresAt,
  });
  if (error) return json({ error: "The garden could not be opened." }, 503);
  return json({ token, expiresAt });
}

async function load(admin: Admin, body: Record<string, unknown>): Promise<Response> {
  const address = await sessionAddress(admin, body.token);
  if (address instanceof Response) return address;
  const { data, error } = await admin
    .from("growers")
    .select("garden, revision")
    .eq("address", address)
    .maybeSingle();
  if (error) return json({ error: "The garden could not be opened." }, 503);
  const row = data as { garden?: Record<string, unknown>; revision?: number | string } | null;
  if (!row?.garden) return json({ garden: null, revision: 0, savedAt: 0 });
  return json({
    garden: row.garden,
    revision: Number(row.revision) || 0,
    savedAt: Number(row.garden.savedAt) || 0,
  });
}

async function save(admin: Admin, body: Record<string, unknown>): Promise<Response> {
  const address = await sessionAddress(admin, body.token);
  if (address instanceof Response) return address;
  const garden = sanitizeGarden(body.garden, Date.now());
  if (!garden) return json({ error: "That garden cannot be stored." }, 400);
  const { data, error } = await admin.rpc("save_garden", { p_address: address, p_garden: garden });
  if (error || !data || typeof data !== "object") return json({ error: "The garden could not be saved." }, 503);
  const result = data as { ok?: boolean; revision?: number | string; savedAt?: number | string; garden?: unknown };
  const savedAt = Number(result.savedAt) || 0;
  const revision = Number(result.revision) || 0;
  if (!result.ok) {
    return json({
      error: "A newer garden is already saved to this wallet.",
      garden: result.garden ?? null,
      revision,
      savedAt,
    }, 409);
  }
  return json({ revision, savedAt });
}

export default {
  fetch: withSupabase({
    auth: ["publishable"],
    cors: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    },
  }, async (req, ctx) => {
    if (req.method !== "POST") return json({ error: "Send a POST." }, 405);
    let body: Record<string, unknown>;
    try {
      const text = await req.text();
      if (text.length > MAX_BODY) return json({ error: "That garden is too large to store." }, 413);
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return json({ error: "The request was not understood." }, 400);
      body = parsed as Record<string, unknown>;
    } catch {
      return json({ error: "The request was not understood." }, 400);
    }
    const admin = ctx.supabaseAdmin as unknown as Admin;
    if (body.op === "auth") return auth(admin, body);
    if (body.op === "load") return load(admin, body);
    if (body.op === "save") return save(admin, body);
    return json({ error: "The request was not understood." }, 400);
  }),
};
