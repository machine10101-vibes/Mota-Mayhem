-- An email account is one row: the address, the email, and the whole garden.
-- Passwords stay in Supabase Auth. The browser still cannot read or write this table.

alter table public.growers add column email text;
alter table public.growers add constraint growers_email_chk check (
  email is null or (
    char_length(email) between 3 and 254
    and email = lower(email)
    and position('@' in email) > 1
  )
);

alter table public.grower_sessions add column email text;
alter table public.grower_sessions add constraint grower_sessions_email_chk check (
  email is null or (
    char_length(email) between 3 and 254
    and email = lower(email)
    and position('@' in email) > 1
  )
);

-- Same newer-savedAt rule as save_garden, and the verified email is stored on the row.
create or replace function public.save_account_garden(p_address text, p_garden jsonb, p_email text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  row public.growers%rowtype;
  incoming numeric;
  current_at numeric;
  mail text;
begin
  if p_address !~ '^klv1[02-9ac-hj-np-z]{58}$'
     and p_address !~ '^g:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then
    raise exception 'bad address';
  end if;
  mail := lower(btrim(coalesce(p_email, '')));
  if char_length(mail) < 3 or char_length(mail) > 254 or position('@' in mail) < 2 then
    raise exception 'bad email';
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
    insert into public.growers (address, email, garden, revision)
    values (p_address, mail, p_garden, 1)
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
    set email = mail,
        garden = p_garden,
        revision = revision + 1,
        updated_at = now()
    where address = p_address
    returning * into row;

  return jsonb_build_object('ok', true, 'revision', row.revision, 'savedAt', incoming);
end;
$$;

revoke all on function public.save_account_garden(text, jsonb, text) from public, anon, authenticated;
grant execute on function public.save_account_garden(text, jsonb, text) to service_role;
