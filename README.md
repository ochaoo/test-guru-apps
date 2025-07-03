# Test Guru Apps

Monorepo for collecting, storing, and reporting events from Facebook and TikTok sources.

---

## 🧩 Services

- **gateway**  
  Receives webhooks from the Publisher and publishes events to NATS JetStream.
- **fb-collector**  
  Subscribes to Facebook events from NATS and writes them into PostgreSQL.
- **ttk-collector**  
  Subscribes to TikTok events from NATS and writes them into PostgreSQL.
- **reporter**  
  Provides HTTP API for aggregated reports (events, revenue, demographics).
- **Publisher** (`andriiuni/events`)  
  Docker image that simulates event generation and sends webhooks to the gateway.
- **nats**  
  JetStream message broker.
- **postgres**  
  PostgreSQL database for event storage.
- **prometheus**  
  Collects metrics from all services via their `/metrics` endpoints.
- **grafana**  
  Dashboards for visualizing Prometheus metrics.

---

## ⚙️ Prerequisites

- Docker
- Docker Compose (v1.27+ or v2)

---

## 🚀 Getting Started

1. **Create a `.env` file** in the repo root:

   ```env
   DATABASE_URL=postgresql://postgres:postgres@postgres:5432/events?schema=public
   NATS_URL=nats://nats:4222
   EVENT_ENDPOINT=http://gateway:3000/webhook
   NODE_ENV=development
   ```

2. **Build the common package**
   npm run build:common

3. **Start all services**
   docker-compose up --build

4. **Stop services**
   docker-compose down
