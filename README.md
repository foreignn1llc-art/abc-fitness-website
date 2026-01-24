# 🏥 CloudMedique OS - Core Engine

**Unified AI for Secure, Intelligent Healthcare in the GCC.** *Arabic-first, regulator-ready AI layer for modern hospital systems.*

---

## 🚀 Project Overview
CloudMedique is building the world’s most intelligent and secure healthcare operating system, born in the Middle East and scaled globally. Our focus is on solving data interoperability and predictive population health challenges in the UAE and Saudi Arabia.

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Scaffolded from Prototype)
- **Backend:** Supabase (PostgreSQL, Auth, Edge Functions)
- **Compliance Goal:** HIPAA, GDPR, and MOH (UAE/KSA) alignment

## 🧪 2-Week Engineering Trial (Anu & Roy)
This repository hosts the initial scaffold for a 2-week technical experiment focused on the "Secure Data Vault."

### Trial Goals:
1. **Multi-Tenant Security:** Implement Row-Level Security (RLS) policies on the `patient_vitals` table to ensure complete data isolation between clinics.
2. **Data Ingestion & Type-Safety:** Develop a Supabase Edge Function to validate and clean incoming clinical telemetry (e.g., heart rate, BP).
3. **Architecture Review:** Evaluate the existing frontend-to-DB bridge for production-ready security patterns.

## 📂 Repository Structure
- `index.html`: The core UI dashboard (Arabic-English toggle enabled).
- `style.css`: The UI design system (Dark Mode & RTL support).
- `script.js`: The Supabase bridge and UI logic.
- `/supabase`: (To be added) Migrations and Edge Function definitions.

## 📝 Next Steps
- [ ] Initialize Supabase local development environment.
- [ ] Define the `patient_vitals` table schema formally.
- [ ] Deploy first illustrative Edge Function for data validation.
