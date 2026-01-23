# AI Engineer — Applied Agentic Engineering

## Purpose

This document defines the long-term goal, current baseline, and high-level execution plan to deliberately transition from **Senior Software Engineer** to **Applied AI Engineer** focused on building production-grade AI agents and automation systems.

This is not a learning plan.
This is a **professional identity shift**.

---

## North Star Goal

Become an **Applied AI Engineer** capable of:

* Building **production AI agents** for business automation
* Designing **modular, composable skills** (primitives) that teams can compose into workflows
* Shipping autonomous workflows across sales, marketing, and operations
* Owning the **AI development environment** (AI coding tools, templates, patterns, docs)

Target role archetypes (ordered by priority):

1. **Senior Software Engineer, Applied AI**
2. **AI Agent Engineer**
3. **AI Automation Engineer**
4. **AI Infrastructure Engineer**

Explicit non-goal:

* Generic "AI integration" / shallow API demos
* Prompt-only "agent" demos without evaluation, observability, or real automation
* Research-only work without shippable systems
* Core LLM/model development (deferred to future phase)

---

## Definition of Success

This journey is successful when **at least 3 of the following are true**:

* I can ship a tool-using agent that reliably executes multi-step workflows with measurable success criteria
* I can build a **Skills library** (clean abstractions + schemas + docs) that a non-technical user can compose
* I can productionize agents: logs/traces, retries, rate-limit handling, idempotency, run artifacts, regression tests
* I can integrate with business systems (or faithful mocks) like CRM, docs, and chat platforms
* I have public artifacts and write-ups that demonstrate end-to-end agentic systems and are easy to evaluate
* My profile is credible to AI-native hiring loops
* I can collaborate productively with AI researchers and product teams

---

## Current Status (Baseline)

### Technical Background

* Senior Software Engineer
* Strong JavaScript (frontend + backend)
* Experience across:

  * Architecture
  * Quality
  * DevOps
  * CI/CD
  * UX
  * Accessibility (A11y)
* Python: working knowledge, not primary language
* AI experience: usage and integration, not model ownership

### Strengths

* Systems thinking
* Production mindset
* Cross-layer understanding
* Engineering rigor

### Gaps (Explicit)

* No production agent systems shipped
* No visible evaluation or observability work for AI
* Python not yet primary
* No public AI tooling artifacts
* Profile reads as "AI-adjacent", not "AI-first"

These gaps are acknowledged and intentional starting constraints.

---

## Core Product Principles

1. **Agents are systems, not chats**
   An agent must have: loop, tools, memory, termination, and evaluation.

2. **Evaluation is the product**
   If it cannot be measured or replayed, it is not done.

3. **Few primitives, high leverage**
   Prefer a small set of general skills over a long list of narrow tools.

4. **Context discipline**
   Treat context as scarce; offload to files/storage; summarize only when necessary.

5. **Non-technical UX**
   Composability and clarity are requirements, not nice-to-haves.

6. **Framework-agnostic**
   Understand loops/tooling/evals; choose the best tool per scenario. Be fluent with AI coding tools in real work.

---

## Primary Focus: AI Agents

### Why Agents

AI Agents sit at the intersection of:

* Models
* Systems
* Evaluation
* Infrastructure
* Product behavior

They force rigor in:

* Decision-making
* Memory
* Tool use
* Failure handling
* Evaluation under uncertainty

Agents are not demos. They are **systems**.

### Scope of "Agents" in this Journey

* Single-agent systems with measurable objectives
* Tool-using agents (APIs, code execution, retrieval)
* Memory architectures
* Agent evaluation frameworks
* Reliability, observability, and debugging of agent behavior
* Workflow automation (triggers, state, human approvals, audit logs)

---

## Competency Checklist

### Agent Runtime

* Loop with explicit termination
* Tool registry + schemas + error surfaces
* Retries/backoff + rate-limit handling
* Deterministic run artifacts (run_id, config snapshot, trace logs)

### Skills Design

* Clean, stable abstractions
* Composability (skills chain without leaking complexity)
* Non-technical docs/examples
* Input/output schemas
* Idempotency strategies
* Logging/tracing hooks

### Workflow Automation

* Triggers, state, human approvals, audit logs
* Integration adapters (real + mock for CRM, drive, chat)

### AI Dev Environment Ownership

* Templates + "golden paths"
* Rules/patterns for AI coding assistants
* Docs that let others ship fast

---

## The Two Spine Repos (Phase 1–2)

### 1) `agent-evalkit` (core engineering proof)

A minimal harness to:

* Define tasks (JSONL) for agent workflows (research, enrichment, drafting, routing)
* Run agents, capture **step traces**, tool calls, failures
* Score outcomes and compare runs (regressions)

### 2) `skills-kit` (composable primitives)

A modular "Skills" library:

* Each skill is a composable primitive with:
  * Input schema
  * Output schema
  * Idempotency strategy
  * Logging/tracing hooks
  * Documentation for non-technical users
* Provide adapters:
  * Real integrations where possible
  * **Mock adapters** (CRM, drive, chat) so the repo is runnable

---

## Public Narrative & Personal Platform

### Personal Domain

Primary public hub:

* **[https://marcosgilf.com](https://marcosgilf.com)**

Purpose:

* Track the AI Engineer journey publicly
* Publish technical write-ups and experiments
* Host long-form thinking that does not fit social media
* Act as the canonical source of truth

GitHub remains the execution layer. The website is the narrative layer.

### LinkedIn Relationship (Single Source of Truth)

LinkedIn is treated as a **distribution channel**, not the source of truth.

Rules:

* Canonical content lives on marcosgilf.com
* LinkedIn posts reference or summarize canonical content
* No divergence between profiles

References:

* [https://es.linkedin.com/in/marcosgilfernandez/en](https://es.linkedin.com/in/marcosgilfernandez/en)
* [https://www.getmanfred.com/blog/writing-in-linkedin](https://www.getmanfred.com/blog/writing-in-linkedin)
* [https://www.getmanfred.com/en/blog/de-scrappers-imposibles-a-apis-funcionales-la-aventura-de-manfred-con-linkedin](https://www.getmanfred.com/en/blog/de-scrappers-imposibles-a-apis-funcionales-la-aventura-de-manfred-con-linkedin)

---

## Observability & Impact Tracking (Dogfooding)

The personal platform is also an **engineering playground**.

### Objectives

* Measure reach and engagement
* Practice production-grade observability
* Apply infra thinking to personal work

### Stack (Open Source)

* **OpenTelemetry** — tracing and metrics
* **Prometheus** — metrics collection
* **Grafana** — dashboards and visualization

### Metrics of Interest

* Page visits and navigation paths
* Time on content
* Interaction depth (scroll, clicks)
* Content performance over time
* Correlation between published artifacts and inbound signals

No third-party black-box analytics unless strictly necessary.

---

## Execution Plan

See [plan.md](plan.md) for the detailed execution roadmap with tracked steps.

### Phase Summary

| Phase | Focus | Timeline |
|-------|-------|----------|
| Phase 0 | Setup & infrastructure | Days 1–3 |
| Phase 1 | Agentic engineering fundamentals (`agent-evalkit`) | Weeks 1–6 |
| Phase 2 | Skills library + workflow automation (`skills-kit`) | Weeks 7–12 |
| Phase 3 | AI dev environment ownership | Weeks 13–16 |
| Phase 4 | Positioning & narrative | Weeks 17–20 |
| Future | Core ML (deferred) | Post Week 20 |

### Daily Operating Cadence (1 hour/day)

* **40 min build**: one small slice (feature + test)
* **10 min evaluate**: run suite, log deltas
* **10 min document**: DEVLOG entry + one lesson learned

### Key Deliverables

* `agent-evalkit` — eval harness with step traces, tool calls, and regression tests
* `skills-kit` — composable primitives with schemas, docs, and mock adapters
* Golden template repo for team enablement
* 2 canonical technical posts on marcosgilf.com

### Future Phase — Core ML

Deferred to build a strong foundation in production agent systems first:

* Model training, fine-tuning, and evaluation
* Research-adjacent engineering contributions
* Multimodal systems

---

## Output Standards (Public Artifacts)

* A stranger can clone and run in <15 minutes
* README includes: objective, how to run, metrics, failure analysis, roadmap
* Code demonstrates production patterns (logging, retries, idempotency)

---

## Constraints & Trade-offs

* This path sacrifices short-term comfort for long-term leverage
* JavaScript remains useful but is no longer the center
* Speed is less important than correctness and depth
* Many attempts will fail; failures are expected artifacts
* Core ML work is explicitly deferred, not abandoned

---

## Operating Rules

* If a system cannot be evaluated, it is incomplete
* If results cannot be reproduced, they do not count
* If something feels "too easy", it is probably too shallow
* No resume-driven development

---

## Review Cadence

* Monthly: reassess focus and learning gaps
* Quarterly: evaluate whether artifacts match target roles
* Annually: decide whether to narrow or pivot focus

---

## Final Note

This document is a **living system definition**.
It will evolve as skills, constraints, and opportunities change.

The goal is not to "learn AI".
The goal is to **become an Applied AI Engineer others rely on**.
