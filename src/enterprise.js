import { loadCloudConfig } from './wallet/cloud.js';
import { freshAccessToken } from './wallet/account.js';

const ADULT_KEY = 'mm-enterprise-adult-v1';

function ownerId(session) {
  if (session?.provider !== 'email' || typeof session.address !== 'string') {
    throw new Error('Sign in with an email account to use Enterprise.');
  }
  const id = session.address.startsWith('g:') ? session.address.slice(2) : '';
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
    throw new Error('Your email account session is not valid. Sign in again.');
  }
  return id.toLowerCase();
}

export function safeHttpsUrl(value, optional = false) {
  const raw = String(value || '').trim();
  if (!raw && optional) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:' || !url.hostname || url.username || url.password) return null;
    return url.href;
  } catch {
    return null;
  }
}

export function slugifyBrand(value) {
  return String(value || '').trim().toLowerCase()
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
}

export function isAdultAttested() {
  try { return localStorage.getItem(ADULT_KEY) === 'yes'; } catch { return false; }
}

export function setAdultAttested(yes) {
  try {
    if (yes) localStorage.setItem(ADULT_KEY, 'yes');
    else localStorage.removeItem(ADULT_KEY);
    return true;
  } catch {
    return false;
  }
}

async function rest(table, { session = null, method = 'GET', filters = {}, select = '*', body = null } = {}) {
  const cfg = await loadCloudConfig();
  if (!cfg.url || !cfg.key) throw new Error('Enterprise services are not connected right now.');
  const url = new URL(`${cfg.url}/rest/v1/${table}`);
  if (select) url.searchParams.set('select', select);
  for (const [key, value] of Object.entries(filters)) url.searchParams.set(key, value);
  const token = session ? await freshAccessToken(session) : cfg.key;
  const headers = { apikey: cfg.key, authorization: `Bearer ${token}`, accept: 'application/json' };
  if (body) {
    headers['content-type'] = 'application/json';
    headers.prefer = 'return=representation';
  }
  const response = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const detail = payload?.message || payload?.details || payload?.hint || payload?.error_description;
    if (response.status === 401) throw new Error('Your session expired. Sign in again.');
    if (response.status === 409 || payload?.code === '23505') throw new Error('That submission already exists. Refresh the Enterprise panel.');
    throw new Error(detail && String(detail).length < 180 ? String(detail) : 'The Enterprise request could not be completed.');
  }
  return payload;
}

export async function loadEnterpriseDashboard(session) {
  const userId = ownerId(session);
  const applications = await rest('enterprise_applications', {
    session, filters: { user_id: `eq.${userId}`, limit: '1' },
  });
  const application = applications?.[0] || null;
  if (!application || application.status !== 'approved') {
    return { application, brands: [], strains: [], campaigns: [] };
  }
  const filters = { owner_id: `eq.${userId}`, order: 'created_at.desc' };
  const [brands, strains, campaigns] = await Promise.all([
    rest('enterprise_brands', { session, filters }),
    rest('enterprise_strains', { session, filters }),
    rest('enterprise_campaigns', { session, filters }),
  ]);
  return { application, brands: brands || [], strains: strains || [], campaigns: campaigns || [] };
}

export async function saveEnterpriseApplication(session, current, data) {
  const userId = ownerId(session);
  const body = { ...data, status: 'pending' };
  if (current?.id) {
    return rest('enterprise_applications', { session, method: 'PATCH', filters: { id: `eq.${current.id}` }, body }).then((rows) => rows?.[0] || null);
  }
  return rest('enterprise_applications', { session, method: 'POST', body: { ...body, user_id: userId } }).then((rows) => rows?.[0] || null);
}

export async function saveEnterpriseBrand(session, application, current, data) {
  const userId = ownerId(session);
  const body = { ...data, status: 'pending' };
  if (current?.id) {
    return rest('enterprise_brands', { session, method: 'PATCH', filters: { id: `eq.${current.id}` }, body }).then((rows) => rows?.[0] || null);
  }
  return rest('enterprise_brands', {
    session, method: 'POST',
    body: { ...body, application_id: application.id, owner_id: userId },
  }).then((rows) => rows?.[0] || null);
}

export async function saveEnterpriseStrain(session, brand, data) {
  const userId = ownerId(session);
  return rest('enterprise_strains', {
    session, method: 'POST',
    body: { ...data, brand_id: brand.id, owner_id: userId, status: 'pending' },
  }).then((rows) => rows?.[0] || null);
}

export async function saveEnterpriseCampaign(session, brand, strain, data) {
  const userId = ownerId(session);
  const starts = new Date();
  const ends = new Date(starts.getTime() + 30 * 24 * 60 * 60 * 1000);
  return rest('enterprise_campaigns', {
    session, method: 'POST',
    body: {
      ...data, brand_id: brand.id, strain_id: strain.id, owner_id: userId,
      starts_at: starts.toISOString(), ends_at: ends.toISOString(), status: 'pending',
    },
  }).then((rows) => rows?.[0] || null);
}

export async function loadPublicCatalog() {
  const now = new Date().toISOString();
  const [brands, strains, campaigns] = await Promise.all([
    rest('enterprise_brands', { filters: { status: 'eq.approved', order: 'display_name.asc' }, select: 'id,slug,display_name,tagline,about,website,logo_url,jurisdiction' }),
    rest('enterprise_strains', { filters: { status: 'eq.approved', order: 'name.asc' }, select: 'id,brand_id,name,lineage,description,image_url,official_url' }),
    rest('enterprise_campaigns', {
      filters: { status: 'eq.approved', starts_at: `lte.${now}`, ends_at: `gt.${now}`, order: 'created_at.desc' },
      select: 'id,brand_id,strain_id,headline,message,destination_url,starts_at,ends_at',
    }),
  ]);
  const brandById = new Map((brands || []).map((brand) => [brand.id, brand]));
  const strainById = new Map((strains || []).map((strain) => [strain.id, strain]));
  return {
    brands: brands || [],
    strains: strains || [],
    campaigns: (campaigns || []).filter((campaign) => brandById.has(campaign.brand_id) && strainById.has(campaign.strain_id))
      .map((campaign) => ({ ...campaign, brand: brandById.get(campaign.brand_id), strain: strainById.get(campaign.strain_id) })),
  };
}
