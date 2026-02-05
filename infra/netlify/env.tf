resource "netlify_environment_variable" "influx_url" {
  site_id = var.site_id
  team_id = var.team_id
  key     = "INFLUX_URL"
  values = [{
    context = "production"
    value   = var.influx_url
  }]
}

resource "netlify_environment_variable" "influx_org" {
  site_id = var.site_id
  team_id = var.team_id
  key     = "INFLUX_ORG"
  values = [{
    context = "production"
    value   = var.influx_org
  }]
}

resource "netlify_environment_variable" "influx_bucket" {
  site_id = var.site_id
  team_id = var.team_id
  key     = "INFLUX_BUCKET"
  values = [{
    context = "production"
    value   = var.influx_bucket
  }]
}

resource "netlify_environment_variable" "public_track_site_id" {
  site_id = var.site_id
  team_id = var.team_id
  key     = "PUBLIC_TRACK_SITE_ID"
  values = [{
    context = "production"
    value   = var.public_track_site_id
  }]
}

resource "netlify_environment_variable" "public_track_enabled" {
  site_id = var.site_id
  team_id = var.team_id
  key     = "PUBLIC_TRACK_ENABLED"
  values = [{
    context = "production"
    value   = var.public_track_enabled
  }]
}
