<div align="center">

# 🖥️ GlucoVision Web Dashboard

**The clinician and researcher-facing analytics portal for the GlucoVision diabetes management platform.**  
*Patient analytics · Glucose charts · Model monitoring · FL status · Digital twin studio*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](#)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)](#)
[![Docker](https://img.shields.io/badge/Docker-Containerised-2496ED?style=for-the-badge&logo=docker)](#)
[![Status](https://img.shields.io/badge/Status-In%20Development-f59e0b?style=for-the-badge)](#)

</div>

---

## 📌 Purpose

GlucoVision Web Dashboard is the **clinician and researcher interface** to the platform — the counterpart to the patient mobile app. Doctors monitor patient glucose trends, review AI-generated meal recommendations, configure alert thresholds, and explore digital twin what-if scenarios. Researchers monitor federated learning rounds and model drift in real time.

> While the mobile app serves patients, this dashboard serves the **clinical and research team** with analytics, governance, and AI observability tools.

---

## 📁 Project Structure

```
04-glucovision-web-dashboard/
└── (Git repository initialised — structure to be scaffolded)
```

> **Note:** This repository is in the initialisation phase. The frontend structure will be scaffolded using React + Vite when Phase 1 development begins.

---

## ✨ Planned Features (by phase)

### Phase 1 — Basic Charts *(Foundation)*
- [ ] Clinician login (JWT via `05-auth-service`)
- [ ] Patient list view (via `06-user-service`)
- [ ] Basic glucose trend charts (InfluxDB data via `12`)
- [ ] Food log review per patient

### Phase 2 — Analytics
- [ ] Population-level glucose dashboards
- [ ] Per-patient food recognition review
- [ ] Activity vs glucose correlation charts
- [ ] Recommendation review and clinician override

### Phase 3 — AI Monitoring
- [ ] ML model drift dashboard (MAPE trends from `09`, `12`)
- [ ] Alert threshold configuration per patient → `13-risk-alert-engine`
- [ ] Alert history viewer

### Phase 4 — Research Tools
- [ ] Federated learning round monitoring → `20-federated-learning`
  - Convergence curve, client participation, privacy budget
- [ ] Digital twin studio — interactive what-if simulator → `19-digital-twin`
- [ ] MLflow model registry browser

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- A running GlucoVision backend (see [`08-api-gateway`](../01-glucovision-platform-architecture/repo-docs/08-api-gateway.md))

### Setup (once scaffolded)

```bash
# Install dependencies
npm install

# Start development server
npm run dev           # http://localhost:5173

# Build production bundle
npm run build

# Preview production build
npm run preview
```

### Docker

```bash
# Build and run container
docker build -t glucovision-dashboard .
docker run -p 3000:80 glucovision-dashboard

# Or via Docker Compose
docker compose up --build
```

---

## 🏗️ Planned Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| State Management | Redux Toolkit / Zustand |
| Routing | React Router v6 |
| Charts | Recharts / D3.js |
| UI Components | Custom component library (Vanilla CSS) |
| HTTP Client | Axios + React Query |
| WebSocket | Native WebSocket API |
| Auth | JWT stored in httpOnly cookie |
| Containerisation | Docker + Nginx |
| Linting | ESLint + Prettier |

---

## 🔗 Backend Dependencies

| Service | What The Dashboard Calls |
|---|---|
| `05` auth-service | Clinician / admin login, RBAC |
| `06` user-service | Patient list, profile management |
| `07` notification-service | Notification template management |
| `08` api-gateway | Single entry point (Traefik routed) |
| `09` food-recognition | Patient food log display |
| `12` glucose-prediction | Glucose forecast charts |
| `13` risk-alert-engine | Alert history + threshold config |
| `15` recommendation-engine | Recommendation review + override |
| `19` digital-twin | What-if simulation studio |
| `20` federated-learning | FL round monitoring |

---

## 👤 User Roles

| Role | Access |
|---|---|
| `patient` | No web dashboard access (mobile app only) |
| `clinician` | Own patients: glucose, food logs, recommendations, alert config |
| `researcher` | Anonymised population data, FL monitoring, model metrics |
| `admin` | Full access: all patients, user management, system config |

---

## 🔐 Security Notes

- JWT stored in httpOnly cookie (prevents XSS token theft)
- Route-level RBAC enforcement (React Router guards)
- HTTPS only — all API calls via TLS through gateway
- CORS: only dashboard origin allowed by backend
- Patient glucose values masked until clinician confirms access

---

## 🧪 Testing (Planned)

```bash
# Unit tests
npm run test

# Component tests (Vitest + React Testing Library)
npm run test:components

# E2E tests (Playwright)
npm run test:e2e

# Accessibility audit
npm run test:a11y
```

---

## 📊 Key Dashboard Screens

| Screen | Description |
|---|---|
| Patient Overview | Glucose trend + food log summary for the day |
| Glucose Chart | Interactive 7/30/90 day glucose time-series |
| Food Log Review | AI-recognised meals with confidence scores |
| Recommendation Studio | View, approve, or override AI meal plans |
| Alert Management | Configure hypo/hyper thresholds per patient |
| Model Monitor | MAPE drift chart per model version (09, 12) |
| FL Dashboard | Federated learning round progress + convergence |
| Digital Twin Studio | What-if scenario comparison charts |

---

<div align="center">

*Part of the [GlucoVision Platform](../01-glucovision-platform-architecture) — 21-Repo AI Diabetes Management System*

</div>
