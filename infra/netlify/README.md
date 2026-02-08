# Netlify DNS infrastructure

This folder manages the Netlify DNS zone for `marcosgilf.com` using Terraform.

> **Note:** The `www` and apex DNS records are auto-managed by Netlify (type `NETLIFY`,
> `managed: true`) when you connect a custom domain via the Netlify dashboard. These
> records do not need to be defined in Terraform.

## Prerequisites

- Terraform >= 1.6
- Netlify personal access token exported as `NETLIFY_TOKEN`
- Netlify team slug for the target account

## Usage

```sh
cd infra/netlify
terraform init
terraform plan -var="team_slug=<your-team>" -var="team_id=<your-team-id>"
terraform apply -var="team_slug=<your-team>" -var="team_id=<your-team-id>"
```

> Note: Netlify free tier does not allow setting scoped secrets via API. Set
> `INFLUX_TOKEN` manually in the Netlify UI (production context).

Optional variables:
- `public_track_site_id` (default `blog`)
- `public_track_enabled` (default `true`)

Note: variables are applied to the `production` context only to avoid
tracking deploy previews.

## Manual one-time step

Update the domain registrar nameservers to the Netlify DNS nameservers.
Terraform cannot change registrar nameservers.

### How to get the nameservers

**Option 1 - Terraform output** (after apply):

```sh
terraform output nameservers
```

**Option 2 - Netlify UI**:

Go to **Domains** → `marcosgilf.com` → view the **Nameservers** section.

**Option 3 - Terraform state**:

```sh
terraform state show netlify_dns_zone.root | grep dns_servers
```

## Plan to test DNS is working

1. Verify the authoritative nameservers are Netlify:

   ```sh
   dig +short NS marcosgilf.com
   ```

   Expect `dns1.p06.nsone.net` / `dns2.p06.nsone.net` / `dns3.p06.nsone.net` / `dns4.p06.nsone.net`.

2. Verify the apex resolves to Netlify (auto-managed `NETLIFY` record):

   ```sh
   dig +short A marcosgilf.com
   ```

   Expect Netlify A values (e.g. `75.2.60.5`) once DNS propagates.

3. Verify `www` resolves to the Netlify site (auto-managed `NETLIFY` record):

   ```sh
   dig +short www.marcosgilf.com
   ```

   Expect Netlify A values or CNAME to `marcosgilf.netlify.app`.

## Deploy preview subdomain

Deploy previews use Netlify's automatic deploy subdomain set in the Netlify UI
(example: `dev.marcosgilf.com`). This requires the root domain to be on Netlify DNS,
which this Terraform module already manages. No additional DNS records are needed in
Terraform for the deploy preview subdomain.
