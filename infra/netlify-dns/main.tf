resource "netlify_dns_zone" "root" {
  name      = var.domain
  team_slug = var.team_slug
}

resource "netlify_dns_record" "www" {
  zone_id  = netlify_dns_zone.root.id
  hostname = "www"
  type     = "CNAME"
  value    = var.netlify_site_cname
  ttl      = 3600
}
