# Netlify DNS infrastructure

This folder manages the Netlify DNS zone for `marcosgilf.com` and the `www` CNAME
record using Terraform.

## Prerequisites

- Terraform >= 1.6
- Netlify personal access token exported as `NETLIFY_TOKEN`
- Netlify team slug for the target account

## Usage

```sh
cd infra/netlify-dns
terraform init
terraform plan -var="team_slug=<your-team>"
terraform apply -var="team_slug=<your-team>"
```

## Manual one-time step

Update the domain registrar nameservers to the Netlify DNS nameservers shown in
Netlify after the zone is created. Terraform cannot change registrar
nameservers.

## Plan to test DNS is working

1. Verify the authoritative nameservers are Netlify:

   ```sh
   dig +short NS marcosgilf.com
   ```

   Expect `dns1.p06.nsone.net`/`dns2.p06.nsone.net`/`dns3.p06.nsone.net`/`dns4.p06.nsone.net`.

2. Verify the apex resolves to Netlify (either ALIAS/ANAME or the Netlify A
   record):

   ```sh
   dig +short A marcosgilf.com
   ```

   Expect Netlify A values (e.g. `75.2.60.5`) once DNS propagates.

3. Verify `www` resolves to the Netlify site:

   ```sh
   dig +short CNAME www.marcosgilf.com
   ```

   Expect `marcosgilf.netlify.app` (or the CNAME you set via
   `netlify_site_cname`).
