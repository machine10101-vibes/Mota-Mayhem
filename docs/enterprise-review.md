# Mota Mayhem Enterprise review operations

Enterprise applications and every public brand, strain, and campaign submission start in `pending`. A company account cannot change its own review status. The public directory and in-game sponsored slot only read approved records.

## Review checklist

1. Confirm the applicant is a real business and that the named contact is authorized to represent it.
2. Independently verify the business and any required advertising/genetics licenses in the stated jurisdiction. Do not treat the applicant's attestations as verification.
3. Confirm the proposed brand, strain and campaign content complies with applicable age, cannabis advertising, trademark, privacy and consumer-protection rules for every audience/location where it will appear.
4. Reject unsupported medical, potency, safety or outcome claims; pricing, purchase links and sales offers are not supported by this initial release.
5. Approve each layer separately: application, brand profile, strain listing, then campaign. Approval of one does not approve the others.
6. Keep evidence of the review outside the public profile tables. Record the reviewer and decision in your normal compliance process.

## Reviewing in Supabase

Use the Supabase SQL Editor while signed in as a project administrator. Find pending submissions first:

```sql
select id, company_name, legal_name, business_email, jurisdiction, license_reference, created_at
from public.enterprise_applications
where status = 'pending'
order by created_at;

select id, application_id, owner_id, slug, display_name, website, jurisdiction
from public.enterprise_brands
where status = 'pending'
order by created_at;

select id, brand_id, name, lineage, official_url
from public.enterprise_strains
where status = 'pending'
order by created_at;

select id, brand_id, strain_id, headline, message, destination_url, starts_at, ends_at
from public.enterprise_campaigns
where status = 'pending'
order by created_at;
```

Approve or reject only after the review is complete. Replace the UUID and status in the relevant statement:

```sql
update public.enterprise_applications set status = 'approved' where id = '<application-uuid>' and status = 'pending';
update public.enterprise_brands set status = 'approved' where id = '<brand-uuid>' and status = 'pending';
update public.enterprise_strains set status = 'approved' where id = '<strain-uuid>' and status = 'pending';
update public.enterprise_campaigns set status = 'approved' where id = '<campaign-uuid>' and status = 'pending';
```

Use `rejected` for a declined submission. The owner may edit and resubmit rejected records; they cannot set status themselves. A campaign must be approved separately and must still be within its start/end window to appear.

## Important launch limitation

The in-game and public-site age gate is a voluntary 21+ self-attestation, not verified age assurance. Before activating real-world cannabis promotion, obtain jurisdiction-specific legal review and implement any stronger age/location verification, licensing checks, ad disclosures, and platform restrictions required for the markets you intend to serve. Do not approve campaigns solely because an applicant checked a box.
