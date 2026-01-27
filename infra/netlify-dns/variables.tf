variable "team_slug" {
  type        = string
  description = "Slug identifying the Netlify team that owns this DNS zone."
  default     = "marcosgilf"
}

variable "domain" {
  type        = string
  description = "Root domain name for which DNS records will be managed."
  default     = "marcosgilf.com"
}
