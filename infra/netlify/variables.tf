variable "team_slug" {
  type        = string
  description = "Slug identifying the Netlify team that owns this DNS zone."
  default     = "marcosgilf"
}

variable "team_id" {
  type        = string
  description = "Netlify team ID (required for environment variables)."
}

variable "domain" {
  type        = string
  description = "Root domain name for which DNS records will be managed."
  default     = "marcosgilf.com"
}

variable "site_id" {
  type        = string
  description = "Netlify site ID to attach environment variables."
}

variable "influx_url" {
  type        = string
  description = "InfluxDB base URL."
}

variable "influx_org" {
  type        = string
  description = "InfluxDB organization name."
}

variable "influx_bucket" {
  type        = string
  description = "InfluxDB bucket name."
}

variable "public_track_site_id" {
  type        = string
  description = "Client-side tracking site identifier."
  default     = "blog"
}

variable "public_track_enabled" {
  type        = string
  description = "Whether client-side tracking is enabled."
  default     = "true"
}
