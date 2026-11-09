-- Klever wallet gardens. The browser cannot read or write these tables.
-- The grower edge function checks the wallet signature, then uses the service role.

create table public.growers (
  address text primary key,
  garden jsonb not null,
  revision bigint not null default 1,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint growers_address_chk check (address ~ '^klv1[02-9ac-hj-np-z]{58}$'),
  constraint growers_revision_chk check (revision > 0),
  constraint growers_garden_chk check (jsonb_typeof(garden) = 'object')
);

create table public.grower_sessions (
  token_hash text primary key,
  address text not null,
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  constraint grower_sessions_address_chk check (address ~ '^klv1[02-9ac-hj-np-z]{58}$'),
  constraint grower_sessions_hash_chk check (token_hash ~ '^[0-9a-f]{64}$')
);

create index grower_sessions_expires_idx on public.grower_sessions (expires_at);

alter table public.growers enable row level security;
alter table public.grower_sessions enable row level security;

revoke all on table public.growers from anon, authenticated;
revoke all on table public.grower_sessions from anon, authenticated;
grant select, insert, update, delete on table public.growers to service_role;
grant select, insert, update, delete on table public.grower_sessions to service_role;

-- Last write with the newer savedAt wins. An older device gets the current row back.
create or replace function public.save_garden(p_address text, p_garden jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  row public.growers%rowtype;
  incoming numeric;
  current_at numeric;
begin
  if p_address !~ '^klv1[02-9ac-hj-np-z]{58}$' then
    raise exception 'bad address';
  end if;
  if jsonb_typeof(p_garden) is distinct from 'object' then
    raise exception 'bad garden';
  end if;
  if octet_length(p_garden::text) > 262144 then
    raise exception 'too large';
  end if;

  incoming := coalesce((p_garden->>'savedAt')::numeric, 0);

  select * into row from public.growers where address = p_address for update;
  if not found then
    insert into public.growers (address, garden, revision)
    values (p_address, p_garden, 1)
    returning * into row;
    return jsonb_build_object('ok', true, 'revision', row.revision, 'savedAt', incoming);
  end if;

  current_at := coalesce((row.garden->>'savedAt')::numeric, 0);
  if incoming < current_at then
    return jsonb_build_object(
      'ok', false,
      'revision', row.revision,
      'savedAt', current_at,
      'garden', row.garden
    );
  end if;

  update public.growers
    set garden = p_garden,
        revision = revision + 1,
        updated_at = now()
    where address = p_address
    returning * into row;

  return jsonb_build_object('ok', true, 'revision', row.revision, 'savedAt', incoming);
end;
$$;

revoke all on function public.save_garden(text, jsonb) from public, anon, authenticated;
grant execute on function public.save_garden(text, jsonb) to service_role;
