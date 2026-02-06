# Grafana Terraform

This folder manages Grafana Cloud dashboards via Terraform.

## Prereqs
- Terraform >= 1.5
- Grafana Cloud API token with dashboard permissions
- Grafana Cloud org ID

## Setup
1. Copy the example tfvars file and fill in values:

```bash
cp terraform.tfvars.example terraform.tfvars
```

2. Initialize and apply:

```bash
terraform init
terraform apply
```

## Dashboards
- Put dashboard JSON exports in `infra/grafana/dashboards`.
- Each `*.json` file is loaded into the `Web Analytics` folder by default.
- To change the folder name, update `dashboard_folder` in `terraform.tfvars`.
