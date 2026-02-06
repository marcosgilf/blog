terraform {
  required_version = ">= 1.5.0"

  required_providers {
    grafana = {
      source  = "grafana/grafana"
      version = "~> 3.12"
    }
  }
}

provider "grafana" {
  url    = var.grafana_url
  auth   = var.grafana_api_token
  org_id = var.grafana_org_id
}

resource "grafana_folder" "analytics" {
  title = var.dashboard_folder
}

locals {
  dashboard_dir   = "${path.module}/${var.dashboards_path}"
  dashboard_files = fileset(local.dashboard_dir, "*.json")
}

resource "grafana_dashboard" "dashboards" {
  for_each = { for filename in local.dashboard_files : filename => filename }

  folder      = grafana_folder.analytics.id
  config_json = file("${local.dashboard_dir}/${each.value}")
}
