# Plan — Applied AI Engineer Execution Roadmap

Optimized for **1 hour/day** and aligned to Applied AI responsibilities: agents + skills + workflow automation + AI dev environment.

See [ai-engineer.md](ai-engineer.md) for context, goals, and principles.

---

## Phase 0 — Setup (Days 1–3)

**Goal:** Remove friction and establish infrastructure.

| Step | Description | Completed |
|------|-------------|-----------|
| 0.1 | Create repos: `agent-evalkit`, `skills-kit`, `marcosgilf.com` | `false` |
| 0.2 | Standard tooling: `uv` (or poetry), ruff, pytest, pre-commit, GitHub Actions | `false` |
| 0.3 | Start `DEVLOG.md` (daily log) | `false` |

**Exit criteria:** CI green; "hello run" produces `runs/<run_id>/`.

---

## Phase 1 — Agentic Engineering Fundamentals (Weeks 1–6)

**Goal:** Build and evaluate a tool-using agent loop (not a demo).

### Week 1: Skeleton + Run Artifacts

| Step | Description | Completed |
|------|-------------|-----------|
| 1.1 | CLI: `run --config ...` | `false` |
| 1.2 | Create `runs/<run_id>/` with config snapshot + placeholder report | `false` |
| 1.3 | Smoke tests + CI | `false` |

### Week 2: Task Schema + Scoring v0

| Step | Description | Completed |
|------|-------------|-----------|
| 2.1 | JSONL tasks: prompt + expected + tags + allowed_tools | `false` |
| 2.2 | JSONL results: output + score + error + latency + trace_path | `false` |
| 2.3 | Metrics report: overall + per-tag | `false` |

### Week 3: Tooling + Agent Loop v0

| Step | Description | Completed |
|------|-------------|-----------|
| 3.1 | Tool registry + schemas | `false` |
| 3.2 | Tools: calculator + local file search + write file | `false` |
| 3.3 | Termination: max steps + explicit done | `false` |

### Week 4: Observability + Replay

| Step | Description | Completed |
|------|-------------|-----------|
| 4.1 | Structured logs per step/tool call | `false` |
| 4.2 | Save full trace per task | `false` |
| 4.3 | Replay from stored artifacts | `false` |

### Week 5: Failure Taxonomy + Fixes

| Step | Description | Completed |
|------|-------------|-----------|
| 5.1 | Categorize failures (tool choice, args, loop, hallucination) | `false` |
| 5.2 | Implement 2 fixes | `false` |
| 5.3 | Before/after metrics | `false` |

### Week 6: Regression Testing

| Step | Description | Completed |
|------|-------------|-----------|
| 6.1 | Run comparison command | `false` |
| 6.2 | Alert on score deltas; list broken tasks | `false` |

**Exit criteria:** `agent-evalkit` is inspectable and measurable.

---

## Phase 2 — Skills Library + Workflow Automation (Weeks 7–12)

**Goal:** Build modular, composable skills and autonomous workflows.

### Weeks 7–8: `skills-kit` v0

| Step | Description | Completed |
|------|-------------|-----------|
| 7.1 | Write a "Skill spec" (schema, idempotency, logs, examples) | `false` |
| 7.2 | Implement 6–10 skills (primitives) with mock adapters | `false` |

Example skills:
- `find_company_info`, `enrich_contact`, `draft_email`
- `summarize_thread`, `create_crm_record`, `update_pipeline_stage`

### Weeks 9–10: Composition + Non-Technical UX

| Step | Description | Completed |
|------|-------------|-----------|
| 9.1 | Skill cookbook docs (copy/paste examples) | `false` |
| 9.2 | Composer interface: YAML workflows OR CLI wizard | `false` |
| 9.3 | Evals for composed workflows (multi-step) | `false` |

### Weeks 11–12: Workflow Automation

| Step | Description | Completed |
|------|-------------|-----------|
| 11.1 | Build workflow 1: Lead research → enrichment → CRM update → notification | `false` |
| 11.2 | Build workflow 2: Proposal draft → review gate → send/log | `false` |
| 11.3 | Add audit logs + human approval steps | `false` |

**Exit criteria:** Realistic automation demo that runs end-to-end and is measurable.

---

## Phase 3 — AI Dev Environment Ownership (Weeks 13–16)

**Goal:** Prove you can enable a team to ship fast.

### Golden Template Repo

| Step | Description | Completed |
|------|-------------|-----------|
| 13.1 | Logging/tracing setup | `false` |
| 13.2 | Eval harness wiring | `false` |
| 13.3 | Tool scaffolding | `false` |
| 13.4 | Safe defaults configuration | `false` |

### Documentation

| Step | Description | Completed |
|------|-------------|-----------|
| 14.1 | AI coding tools rules and usage patterns (Cursor, Claude Code, etc.) | `false` |
| 14.2 | Production readiness checklists (retries, idempotency, secrets, rate limits, monitoring) | `false` |

**Exit criteria:** Templates + docs that a teammate could follow to build agent workflows.

---

## Phase 4 — Positioning (Weeks 17–20)

**Goal:** Convert artifacts into hiring-loop-ready narrative.

### Content

| Step | Description | Completed |
|------|-------------|-----------|
| 17.1 | Post: "Composable Skills for automation: design + tradeoffs" | `false` |
| 17.2 | Post: "Evaluating tool-using agents: failure modes + regression tests" | `false` |
| 17.3 | Portfolio page with demos, metrics, architecture diagrams | `false` |

### Interview Preparation

| Step | Description | Completed |
|------|-------------|-----------|
| 18.1 | System design deep dive document | `false` |
| 18.2 | Postmortem of one failure | `false` |
| 18.3 | Scaling plan (cost, caching, reliability) | `false` |

**Exit criteria:** A reviewer sees direct fit to Applied AI roles in <10 minutes.

---

## Future Phase — Core ML (Post Week 20)

Deferred objectives to tackle after establishing production agent expertise:

| Step | Description | Completed |
|------|-------------|-----------|
| F.1 | Model training fundamentals (PyTorch) | `false` |
| F.2 | Fine-tuning workflows | `false` |
| F.3 | Model evaluation frameworks | `false` |
| F.4 | Multimodal systems exploration | `false` |

---

## Weekly Rhythm (1h/day)

| Day | Focus |
|-----|-------|
| Mon–Thu | Implement + tests |
| Fri | Evaluation + cleanup + README updates |
| Weekend (optional) | 1 deeper workflow session |

## Daily Cadence

| Time | Activity |
|------|----------|
| 40 min | Build: one small slice (feature + test) |
| 10 min | Evaluate: run suite, log deltas |
| 10 min | Document: DEVLOG entry + one lesson learned |
