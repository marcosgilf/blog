# AI Engineer — Applied Agentic Engineering

## Document Control

| Version | Date | Source | Notes |
|---|---|---|---|
| v1 | 2026-01-23 | Commit `c22992c` (`docs: ai engineer plan`) | Initial AI Engineer direction with phase-based schedule constraints. |
| v2 | 2026-02-18 | `instructions-v2.md`, `plan-v2.md`, nanobot specs (`iac.md`, `llm-router.md`, `memory-manager.md`, `wodbuster-booker.md`) | Preserves AI Engineer framing, removes fixed cadence, defines iterative execution, and aligns the roadmap with 2026–2027 AI trends. |

---

## Purpose

This document defines the long-term direction to become an **AI Engineer** focused on building production-grade AI systems.  
The current starting domain is **AI Agents**, because it combines runtime engineering, tool orchestration, evaluation, automation, and operational rigor.

This is a professional identity shift, executed through small and continuous delivery.

---

## North Star Goal

Become an **AI Engineer** capable of:

- Building production AI systems with clear operational and quality guarantees.
- Designing tool-using agents that are measurable, reliable, and controllable.
- Shipping automation workflows with real integration boundaries and auditability.
- Owning AI engineering standards: evals, observability, safety controls, and delivery playbooks.

Target role archetypes:

1. Senior Software Engineer, AI Engineer
2. AI Agent Engineer
3. AI Automation Engineer
4. AI Infrastructure Engineer

---

## Scope for 2026–2027

Initial specialization path:

- AI Agents as the first execution domain.

Long-term capability profile:

- Agent runtime engineering.
- Evaluation and regression systems.
- Workflow automation and integrations.
- Security and policy controls for autonomous systems.
- Reliability and observability in production.
- AI-enabled developer productivity and async operations.

This keeps the identity broad as AI Engineer while using agents as the practical entry point.

---

## Current Starting Point

The current work starts in **Nanobot** because it has the lowest learning curve and immediate deployability for real workflows.

Why this is the right starting point:

- Existing IaC and deploy pipeline already running.
- Active skills (`memory-manager`, `wodbuster-booker`) and router (`llm-router`) provide realistic engineering surfaces.
- Immediate feedback loops exist via tests, logs, and operational scripts.

Boundary:

- Nanobot is a launchpad for capability development.
- Nanobot is not the final platform boundary for this roadmap.

---

## Definition of Success

This journey is successful when at least three outcomes are true:

- Tool-using agent systems are shipped with replayable artifacts and measurable quality.
- Evaluation and regression become standard delivery gates.
- Production operations include observability, error handling, idempotency, and policy controls.
- Public technical artifacts clearly demonstrate end-to-end engineering decisions and outcomes.
- The profile is credible for AI-native hiring loops and technical collaboration.

---

## Operating Principles

1. Threat model first.  
Define allowed resources, blast radius, and unacceptable outcomes before implementation.

2. Deny by default.  
Capabilities, filesystem, network, and credentials are restricted until explicitly allowed.

3. Everything is replayable.  
Each run must produce traceable artifacts and reproducible context.

4. Evaluation before claims.  
If behavior cannot be measured and compared, it is not complete.

5. Small compounding steps.  
Every work session should produce one concrete artifact and one clear next step.

---

## Platform Progression Map

| Stage | Platform | Role in the roadmap |
|---|---|---|
| Start | Nanobot | Fastest path to hands-on agent operations and iteration discipline. |
| Expand | OpenClaw | Broader deployable agent platform patterns and reusable architecture. |
| Harden | AgentZero | High-capability OS-agent hardening, policy enforcement, and blast-radius control. |
| Productivity | OpenCode | Async/background coding operations and artifact-driven automation workflows. |

---

## 2026–2027 Trend Alignment

1. Tool protocol interoperability (MCP/connectors).  
Design tools and integration boundaries so agents can consume external capabilities through standard protocols.

2. Structured outputs and typed tool contracts.  
Use schema-first I/O for predictable automation and easier regression testing.

3. Background and async execution.  
Treat long-running operations as first-class, auditable jobs with resumable artifacts.

4. Context and state quality.  
Invest in memory relevance, compaction, and prompt-context hygiene to reduce drift and cost.

5. Cost and performance governance.  
Use model routing, budget controls, fallback strategies, and caching to balance quality and spend.

---

## Iterative Operating Mode

Work happens in available free slots, not fixed schedules.

Session rule:

- Select the smallest unblocked task with high learning leverage.
- Produce one concrete artifact (code, test, run report, doc update, or postmortem).
- Record decision, result, and the next smallest step.

Progress metric:

- Consistent micro-delivery and documented learning over time.

---

## Public Artifact Standards

- A reviewer can understand objective, approach, and evidence quickly.
- Each artifact includes what changed, why it changed, and how it was validated.
- Claims are supported by traces, logs, metrics, tests, or reproducible runs.

---

## Relationship with `plan.md`

Detailed execution tracking lives in `plan.md`, using capability-based workstreams and explicit status markers.

---

## Change Log

### v1 (2026-01-23)

- Established initial AI Engineer transition direction.
- Introduced phase-based execution structure and cadence guidance.

### v2 (2026-02-18)

- Preserved AI Engineer framing as the primary identity.
- Clarified AI Agents as the starting specialization path.
- Added explicit 2026–2027 scope and trend alignment.
- Added iterative operating mode based on available free slots.
- Added platform progression map from Nanobot to broader platforms.
- Merged security and rigor principles from `instructions-v2.md`.
- Added document version control and inline change history.
