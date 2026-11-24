drop policy "Brand owners and public can read approved brands" on public.enterprise_brands;
create policy "Public can read approved brands" on public.enterprise_brands
for select to anon using (status = 'approved');
create policy "Brand owners can read their brand submissions" on public.enterprise_brands
for select to authenticated using (status = 'approved' or (select auth.uid()) = owner_id);

drop policy "Approved strains and owner submissions are readable" on public.enterprise_strains;
create policy "Public can read approved strains" on public.enterprise_strains
for select to anon using (
  status = 'approved' and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.status = 'approved'
  )
);
create policy "Owners can read their strain submissions" on public.enterprise_strains
for select to authenticated using (
  (select auth.uid()) = owner_id
  or (status = 'approved' and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.status = 'approved'
  ))
);

drop policy "Active approved campaigns and owner submissions are readable" on public.enterprise_campaigns;
create policy "Public can read active approved campaigns" on public.enterprise_campaigns
for select to anon using (
  status = 'approved' and starts_at <= now() and ends_at > now()
  and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.status = 'approved'
  )
  and exists (
    select 1 from public.enterprise_strains s
    where s.id = strain_id and s.brand_id = brand_id and s.status = 'approved'
  )
);
create policy "Owners can read their campaigns" on public.enterprise_campaigns
for select to authenticated using (
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

revoke select on public.enterprise_brands from anon;
revoke select on public.enterprise_strains from anon;
revoke select on public.enterprise_campaigns from anon;

grant select (id, slug, display_name, tagline, about, website, logo_url, jurisdiction, status)
  on public.enterprise_brands to anon;
grant select (id, brand_id, name, lineage, description, image_url, official_url, status)
  on public.enterprise_strains to anon;
grant select (id, brand_id, strain_id, headline, message, destination_url, starts_at, ends_at, status)
  on public.enterprise_campaigns to anon;
