variable "grafana_url" {
  type        = string
  description = "Grafana Cloud URL, e.g. https://YOURSTACK.grafana.net"
}

variable "grafana_api_token" {
  type        = string
  description = "Grafana API token with dashboard permissions"
  sensitive   = true
}

variable "grafana_org_id" {
  type        = number
  description = "Grafana organization ID"
}

variable "dashboard_folder" {
  type        = string
  description = "Folder name for dashboards"
  default     = "Web Analytics"
}

variable "dashboards_path" {
  type        = string
  description = "Relative path to dashboard JSON files"
  default     = "dashboards"
}
