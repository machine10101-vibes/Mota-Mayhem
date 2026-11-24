drop policy "Applicants can edit pending applications only" on public.enterprise_applications;
create policy "Applicants can edit or resubmit their own application" on public.enterprise_applications
for update to authenticated using (
  (select auth.uid()) = user_id and status in ('pending','rejected')
) with check (
  (select auth.uid()) = user_id and status = 'pending'
  and age_attested and rights_attested and compliance_attested
);

drop policy "Owners can edit pending brand profiles" on public.enterprise_brands;
create policy "Owners can edit or resubmit pending brand profiles" on public.enterprise_brands
for update to authenticated using (
  (select auth.uid()) = owner_id and status in ('pending','rejected')
) with check (
  (select auth.uid()) = owner_id and status = 'pending'
);

drop policy "Owners can edit pending strain submissions" on public.enterprise_strains;
create policy "Owners can edit or resubmit pending strain submissions" on public.enterprise_strains
for update to authenticated using (
  (select auth.uid()) = owner_id and status in ('pending','rejected')
) with check (
  (select auth.uid()) = owner_id and status = 'pending'
  and exists (
    select 1 from public.enterprise_brands b
    where b.id = brand_id and b.owner_id = (select auth.uid()) and b.status = 'approved'
  )
);

drop policy "Owners can edit pending campaigns" on public.enterprise_campaigns;
create policy "Owners can edit or resubmit pending campaigns" on public.enterprise_campaigns
for update to authenticated using (
  (select auth.uid()) = owner_id and status in ('pending','rejected')
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
