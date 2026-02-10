# Week 2 – Secure Ingestion & Session Persistence

## Scope
This document covers Week-2 of the Secure Data Vault trial.
The goal is to validate secure ingestion and session persistence patterns using Supabase Edge Functions.
This is a scaffold-level prototype, not production hardening.

## Architecture
Client → Edge Function → Supabase (Postgres + RLS)

- All requests require a valid JWT
- JWT is forwarded to Supabase so RLS is always enforced
- Tenant isolation is enforced at the database layer

## Secure Ingestion (patient_vitals)
- Payload is minimally validated
- clinic_id is resolved server-side using current_user_clinic_id()
- Client-supplied tenant identifiers are never trusted
- Cross-tenant writes are blocked by RLS

## Secure Chat Session Persistence
- Only session metadata is stored
- user_id resolved from Supabase Auth context
- clinic_id resolved server-side
- RLS ensures users can access only their own sessions

## Security Guarantees
- No client-side trust for tenant boundaries
- All writes pass through RLS
- JWT-based identity is the single source of truth

## Deferred / Out of Scope
- Advanced schema validation
- Rate limiting
- Audit logging
- Compliance or regulatory guarantees
