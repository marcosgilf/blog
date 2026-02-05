terraform {
  required_version = ">= 1.6"

  # Note: No backend block is defined. State is managed locally (terraform.tfstate).
  # For team collaboration, consider adding a remote backend (S3, Terraform Cloud, etc.).

  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "~> 0.4.0"
    }
  }
}
