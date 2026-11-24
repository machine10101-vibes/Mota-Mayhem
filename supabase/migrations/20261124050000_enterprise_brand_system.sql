create table public.enterprise_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  company_name text not null check (char_length(company_name) between 2 and 100),
  legal_name text not null check (char_length(legal_name) between 2 and 140),
  contact_name text not null check (char_length(contact_name) between 2 and 100),
  business_email text not null check (char_length(business_email) between 5 and 254 and position('@' in business_email) > 1),
  website text not null check (website ~ '^https://[^[:space:]]+$'),
  jurisdiction text not null check (char_length(jurisdiction) between 2 and 100),
  license_reference text not null check (char_length(license_reference) between 2 and 120),
  age_attested boolean not null default false check (age_attested),
  rights_attested boolean not null default false check (rights_attested),
  compliance_attested boolean not null default false check (compliance_attested),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index enterprise_applications_status_idx on public.enterprise_applications(status, created_at desc);

create table public.enterprise_brands (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null unique references public.enterprise_applications(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(slug) between 3 and 48),
  display_name text not null check (char_length(display_name) between 2 and 80),
  tagline text not null check (char_length(tagline) between 2 and 120),
  about text not null check (char_length(about) between 20 and 1200),
  website text not null check (website ~ '^https://[^[:space:]]+$'),
  logo_url text check (logo_url is null or logo_url ~ '^https://[^[:space:]]+$'),
  jurisdiction text not null check (char_length(jurisdiction) between 2 and 100),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index enterprise_brands_owner_idx on public.enterprise_brands(owner_id);
create index enterprise_brands_status_idx on public.enterprise_brands(status, created_at desc);

create table public.enterprise_strains (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid not null references public.enterprise_brands(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 2 and 80),
  lineage text not null check (char_length(lineage) between 2 and 160),
  description text not null check (char_length(description) between 20 and 900),
  image_url text check (image_url is null or image_url ~ '^https://[^[:space:]]+$'),
  official_url text check (official_url is null or official_url ~ '^https://[^[:space:]]+$'),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index enterprise_strains_brand_idx on public.enterprise_strains(brand_id, status);
create index enterprise_strains_owner_idx on public.enterprise_strains(owner_id);

create table public.enterprise_campaigns (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid not null references public.enterprise_brands(id) on delete cascade,
  strain_id uuid not null references public.enterprise_strains(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  headline text not null check (char_length(headline) between 5 and 90),
  message text not null check (char_length(message) between 20 and 240),
  destination_url text not null check (destination_url ~ '^https://[^[:space:]]+$'),
  starts_at timestamptz not null default now(),
  ends_at timestamptz not null default (now() + interval '30 days'),
  status text not null default 'pending' check (status in ('pending','approved','rejected','paused')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint enterprise_campaign_dates check (ends_at > starts_at and ends_at <= starts_at + interval '90 days')
);
create index enterprise_campaigns_live_idx on public.enterprise_campaigns(status, starts_at, ends_at);
create index enterprise_campaigns_owner_idx on public.enterprise_campaigns(owner_id);

create or replace function public.set_enterprise_updated_at()
returns trigger language plpgsql set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger enterprise_applications_updated_at before update on public.enterprise_applications
for each row execute function public.set_enterprise_updated_at();
create trigger enterprise_brands_updated_at before update on public.enterprise_brands
for each row execute function public.set_enterprise_updated_at();
create trigger enterprise_strains_updated_at before update on public.enterprise_strains
for each row execute function public.set_enterprise_updated_at();
create trigger enterprise_campaigns_updated_at before update on public.enterprise_campaigns
for each row execute function public.set_enterprise_updated_at();

alter table public.enterprise_applications enable row level security;
alter table public.enterprise_brands enable row level security;
alter table public.enterprise_strains enable row level security;
alter table public.enterprise_campaigns enable row level security;

grant select, insert, update on public.enterprise_applications to authenticated;
grant select, insert, update, delete on public.enterprise_brands to authenticated;
grant select, insert, update, delete on public.enterprise_strains to authenticated;
grant select, insert, update, delete on public.enterprise_campaigns to authenticated;
grant select on public.enterprise_brands, public.enterprise_strains, public.enterprise_campaigns to anon;

create policy "Applicants can read their application" on public.enterprise_applications
for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users can submit one pending application" on public.enterprise_applications
for insert to authenticated with check (
  (select auth.uid()) = user_id and status = 'pending'
  and age_attested and rights_attested and compliance_attested
);
create policy "Applicants can edit pending applications only" on public.enterprise_applications
for update to authenticated using (
  (select auth.uid()) = user_id and status = 'pending'
) with check (
  (select auth.uid()) = user_id and status = 'pending'
  and age_attested and rights_attested and compliance_attested
);

create policy "Brand owners and public can read approved brands" on public.enterprise_brands
for select to anon, authenticated using (
  status = 'approved' or (select auth.uid()) = owner_id
);
create policy "Approved applicants can submit brand profiles" on public.enterprise_brands
for insert to authenticated with check (
  (select auth.uid()) = owner_id and status = 'pending'
  and exists (
    select 1 from public.enterprise_applications a
    where a.id = application_id and a.user_id = (select auth.uid()) and a.status = 'approved'
  )
);
create policy "Owners can edit pending brand profiles" on public.enterprise_brands
for update to authenticated using (
  (select auth.uid()) = owner_id and status = 'pending'
) with check (
  (select auth.uid()) = owner_id and status = 'pending'
);
create policy "Owners can remove pending brand profiles" on public.enterprise_brands
for delete to authenticated using ((select auth.uid()) = owner_id and status = 'pending');

create policy "Approved strains and owner submissions are readable" on public.enterprise_strains
for select to anon, authenticated using (
  ((select auth.uid()) = owner_id)
  or (status = 'approved' and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.status = 'approved'
  ))
);
create policy "Approved brand owners can submit strains" on public.enterprise_strains
for insert to authenticated with check (
  (select auth.uid()) = owner_id and status = 'pending'
  and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.owner_id = (select auth.uid()) and b.status = 'approved'
  )
);
create policy "Owners can edit pending strain submissions" on public.enterprise_strains
for update to authenticated using (
  (select auth.uid()) = owner_id and status = 'pending'
) with check (
  (select auth.uid()) = owner_id and status = 'pending'
  and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.owner_id = (select auth.uid()) and b.status = 'approved'
  )
);
create policy "Owners can remove pending strain submissions" on public.enterprise_strains
for delete to authenticated using ((select auth.uid()) = owner_id and status = 'pending');

create policy "Active approved campaigns and owner submissions are readable" on public.enterprise_campaigns
for select to anon, authenticated using (
  (select auth.uid()) = owner_id
  or (
    status = 'approved' and starts_at <= now() and ends_at > now()
    and exists (
      select 1 from public.enterprise_brands b
      where b.id = brand_id and b.status = 'approved'
    )
    and exists (
      select 1 from public.enterprise_strains s
      where s.id = strain_id and s.brand_id = brand_id and s.status = 'approved'
    )
  )
);
create policy "Approved brand owners can submit campaigns" on public.enterprise_campaigns
for insert to authenticated with check (
  (select auth.uid()) = owner_id and status = 'pending'
  and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.owner_id = (select auth.uid()) and b.status = 'approved'
  )
  and exists (
    select 1 from public.enterprise_strains s
    where s.id = strain_id and s.brand_id = brand_id and s.owner_id = (select auth.uid()) and s.status = 'approved'
  )
);
create policy "Owners can edit pending campaigns" on public.enterprise_campaigns
for update to authenticated using (
  (select auth.uid()) = owner_id and status = 'pending'
) with check (
  (select auth.uid()) = owner_id and status = 'pending'
  and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.owner_id = (select auth.uid()) and b.status = 'approved'
  )
  and exists (
    select 1 from public.enterprise_strains s
    where s.id = strain_id and s.brand_id = brand_id and s.owner_id = (select auth.uid()) and s.status = 'approved'
  )
);
create policy "Owners can remove pending campaigns" on public.enterprise_campaigns
for delete to authenticated using ((select auth.uid()) = owner_id and status = 'pending');
