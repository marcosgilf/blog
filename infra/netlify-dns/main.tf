resource "netlify_dns_zone" "root" {
  name      = var.domain
  team_slug = var.team_slug
}

# Note: The www and apex records are auto-managed by Netlify (type=NETLIFY, managed=true)
# when you connect a custom domain via the dashboard. No need to manage them in Terraform.
