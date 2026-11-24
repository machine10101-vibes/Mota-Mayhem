revoke all on public.enterprise_applications from public, anon, authenticated;
revoke all on public.enterprise_brands from public, anon, authenticated;
revoke all on public.enterprise_strains from public, anon, authenticated;
revoke all on public.enterprise_campaigns from public, anon, authenticated;

grant select, insert, update on public.enterprise_applications to authenticated;
grant select, insert, update, delete on public.enterprise_brands to authenticated;
grant select, insert, update, delete on public.enterprise_strains to authenticated;
grant select, insert, update, delete on public.enterprise_campaigns to authenticated;
grant select on public.enterprise_brands, public.enterprise_strains, public.enterprise_campaigns to anon;
