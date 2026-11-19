-- Email accounts use g:<supabase user uuid>. Klever wallets stay klv1 addresses.
-- The grower function is still the only writer.

alter table public.growers drop constraint growers_address_chk;
alter table public.growers add constraint growers_address_chk check (
  address ~ '^klv1[02-9ac-hj-np-z]{58}$'
  or address ~ '^g:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
);

alter table public.grower_sessions drop constraint grower_sessions_address_chk;
alter table public.grower_sessions add constraint grower_sessions_address_chk check (
  address ~ '^klv1[02-9ac-hj-np-z]{58}$'
  or address ~ '^g:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
);

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
  if p_address !~ '^klv1[02-9ac-hj-np-z]{58}$'
     and p_address !~ '^g:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then
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
