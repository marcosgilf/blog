output "zone_id" {
  value       = netlify_dns_zone.root.id
  description = "Netlify DNS zone ID."
}

output "nameservers" {
  value       = netlify_dns_zone.root.dns_servers
  description = "Netlify DNS nameservers to configure at your domain registrar."
}
