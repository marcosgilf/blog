# Plan — AI Engineer Execution Roadmap

## Document Control

| Version | Date | Source | Notes |
|---|---|---|---|
| v1 | 2026-01-23 | Commit `c22992c` (`docs: ai engineer plan`) | Initial phase-based roadmap with fixed cadence constraints. |
| v2 | 2026-02-18 | `instructions-v2.md`, `plan-v2.md`, nanobot specs (`iac.md`, `llm-router.md`, `memory-manager.md`, `wodbuster-booker.md`) | Converts roadmap to iterative execution, keeps AI Engineer identity, and makes Nanobot an active starter track within a broader multi-platform plan. |

---

## Plan Status Vocabulary

Use only these statuses:

- `Done` — objective completed with evidence.
- `In Progress` — currently active and unblocked.
- `Blocked` — cannot advance without resolving an external dependency.
- `Queued` — intentionally deferred, ready for activation.

---

## Execution Model (Iterative)

This plan is executed in free time slots, not fixed schedules.

Session operating rule:

1. Pick the smallest unblocked next task.
2. End the session with one concrete artifact.
3. Log decision, result, and next smallest step.

Valid artifacts include code change, test case, run report, trace sample, design note, or postmortem entry.

---

## Current Program Context

Primary identity:

- AI Engineer.

Current starting domain:

- AI Agents.

Current active platform:

- Nanobot, selected because it has the lowest learning curve and immediate deployability.

Roadmap boundary:

- Nanobot is a starting track, not the full scope of the plan.

---

## Nanobot Starter Track

**Status:** `In Progress`

**Objective:** Build practical agent engineering depth through real deployment, skill operations, and reliability improvements.

**Current evidence artifacts:**

- IaC and deployment workflows documented and operational.
- Active feature specs: `iac`, `llm-router`, `memory-manager`, `wodbuster-booker`.
- Test and lint baseline currently passing in the nanobot project.

**Cross-over checkpoints to broader platforms:**

1. When policy and sandbox interfaces are stable in Nanobot patterns, start OpenClaw integration baseline.
2. When risky-action controls and audit style are stable, start AgentZero hardening exercises.
3. When async operational flow is repeatable, start OpenCode background execution track.

---

## Workstream A: Agent Runtime & Tool Use

- **Objective:** Build robust runtime behavior for tool-using agents with explicit contracts and termination boundaries.
- **Current status:** `In Progress`
- **Next 3 smallest tasks:**
1. Define a normalized tool contract template (name, schema, guardrails, expected output).
2. Add one trace example that captures a full tool decision cycle.
3. Document one failure mode where tool selection was incorrect and the correction.
- **Exit criteria:** Runtime behavior is inspectable, reproducible, and consistently schema-driven.
- **Evidence artifacts:** Tool contract docs, trace samples, failure-analysis notes, regression examples.

## Workstream B: Evaluation & Regression

- **Objective:** Make behavior measurable and comparable across changes.
- **Current status:** `In Progress`
- **Next 3 smallest tasks:**
1. Define minimum eval task format for current agent behaviors.
2. Add one scorer for structured output validity.
3. Produce one before/after comparison artifact for a real fix.
- **Exit criteria:** Every significant behavior change can be validated through repeatable evaluation outputs.
- **Evidence artifacts:** Eval task files, scorer definitions, comparison reports, regression logs.

## Workstream C: Secure Deployment & Policies

- **Objective:** Apply threat-model-first and deny-by-default controls to agent operations.
- **Current status:** `In Progress`
- **Next 3 smallest tasks:**
1. Write a lightweight threat model template for each automation flow.
2. Define an allowlist policy draft for tool/network/filesystem access.
3. Add one auditable denied-action example with rationale.
- **Exit criteria:** Critical flows run under explicit policy boundaries with auditable decisions.
- **Evidence artifacts:** Threat model docs, policy files, audit event samples, incident notes.

## Workstream D: Async/Background Agent Operations

- **Objective:** Enable long-running and deferred tasks with clear artifact outputs.
- **Current status:** `In Progress`
- **Next 3 smallest tasks:**
1. Standardize background run output layout (logs, traces, result summary).
2. Define one retry and resumption rule for interrupted jobs.
3. Add one notification format for background completion/failure.
- **Exit criteria:** Background tasks can run safely, be inspected afterward, and be resumed predictably.
- **Evidence artifacts:** Run directories, retry logs, completion notifications, operator runbook snippets.

## Workstream E: Narrative & Portfolio

- **Objective:** Convert engineering work into clear public proof of AI engineering capability.
- **Current status:** `In Progress`
- **Next 3 smallest tasks:**
1. Publish one architecture note that links goal, implementation, and evidence.
2. Publish one postmortem with root cause and corrective action.
3. Update portfolio index with latest artifact links and validation evidence.
- **Exit criteria:** External reviewers can evaluate depth, rigor, and delivery quality quickly.
- **Evidence artifacts:** Public write-ups, architecture diagrams, postmortems, portfolio updates.

---

## Expansion Tracks

| Platform | Status | Why it matters | First activation task |
|---|---|---|---|
| OpenClaw | `Queued` | Generalize deployable agent platform patterns beyond Nanobot. | Stand up a minimal runtime with one policy-controlled tool path. |
| AgentZero | `Queued` | Practice hardening for high-capability OS-agent behavior. | Build strict policy profile and test denied destructive actions. |
| OpenCode | `Queued` | Operationalize async coding workflows and artifact-first delivery. | Run one background task and store reproducible artifacts end-to-end. |

---

## How to Pick Next Task

1. Start from active workstreams in this priority order: blocked fixes, reliability risks, evaluation gaps, then expansion tasks.
2. If current task is blocked, switch immediately to the next smallest unblocked task in another workstream.
3. Prefer tasks that improve both capability and evidence quality.
4. Avoid tasks that cannot produce a concrete artifact in one work session.
5. End by recording the next smallest step so restart cost stays low.

---

## Learning Signals

Track progress by capability gains instead of elapsed time:

- **System design quality:** clearer boundaries, fewer hidden assumptions.
- **Reliability quality:** fewer flaky outcomes, better error handling and recovery.
- **Security quality:** stronger least-privilege defaults and explicit risk handling.
- **Evaluation rigor:** better testability, comparability, and regression confidence.
- **Automation quality:** more repeatable workflows with better operational visibility.

If a session does not improve at least one signal, adjust task selection criteria.

---

## Change Log

### v1 (2026-01-23)

- Defined initial roadmap as time-boxed phases.
- Emphasized agent systems, skills, and public narrative deliverables.

### v2 (2026-02-18)

- Removed fixed schedule constraints and switched to iterative execution.
- Preserved AI Engineer framing as the primary identity.
- Set AI Agents as the starting specialization path.
- Added capability-based workstreams with explicit status vocabulary.
- Added Nanobot starter track as active, with cross-over checkpoints.
- Added queued expansion tracks for OpenClaw, AgentZero, and OpenCode.
- Added task selection rules and learning-signal feedback loop.
- Added document version control and inline change history.
