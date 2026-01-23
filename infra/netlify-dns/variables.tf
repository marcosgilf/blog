variable "team_slug" {
  type = string
}

variable "domain" {
  type    = string
  default = "marcosgilf.com"
}

variable "netlify_site_cname" {
  type        = string
  description = "Netlify site CNAME target for the www record."
  default     = "marcosgilf.netlify.app"
}
