<p align="center">
  <img src="https://raw.githubusercontent.com/taskforcesh/bullmq/main/docs/logo.svg" alt="BullMQ" width="100"/>
  <img src="https://nodei.co/npm/express.png" alt="Express" width="100"/>
  <img src="https://cdn.worldvectorlogo.com/logos/nodemailer.svg" alt="Nodemailer" width="100"/>
  <img src="https://cdn.worldvectorlogo.com/logos/redis.svg" alt="Redis" width="100"/>
  <img src="https://i.ibb.co/mvYPBKz/docker-logo.png" alt="Docker" width="100"/>
</p>

# 📧 Email Scheduling Backend

An email scheduling backend system built using **BullMQ**, **Express**, **Nodemailer**, and **Redis**, designed to schedule and send emails reliably with retry support.

---

## ⚙️ Working Mechanism

### 🔄 BullMQ (Queue System)
- Uses **Redis** as a backend for job queues.
- Communicates via **TCP protocols**, providing fast and persistent messaging.
- Jobs are stored in a **Sorted Set** based on their scheduled execution time.
- A **Producer Queue** adds jobs to Redis.
- A **Worker Queue** monitors the queue and processes jobs at the right time.

### 📬 Nodemailer (Email Sender)
- Uses the **SMTP protocol** to send emails.
- Sends scheduled emails processed by the worker.

### 🧪 Postman (API Testing)
- Used for testing REST API endpoints of the backend.

### 💾 Data Storage
- Email job details are stored locally using a **JSON file**.

### 🧵 Worker Queue
- Listens for jobs when their scheduled time arrives.
- Retries sending emails up to **3 times** if a failure occurs.
- Job statuses: `completed`, `failed`, `retrying`.

### 🐳 Docker (Redis Hosting)
- Redis is hosted inside a **Docker container** for isolated and scalable usage.

### 🧠 ioredis
- Advanced Redis client for Node.js.
- Supports features like pub/sub, cluster, and pipelines.

### 📊 Sorted Set in Redis
- Redis structure where jobs are sorted based on execution time.
- Enables efficient retrieval of scheduled jobs.

---

## 🧱 Project Stack

| Component         | Technology     |
|------------------|----------------|
| API Framework     | Express.js     |
| Queue System      | BullMQ         |
| Queue Backend     | Redis          |
| Email Sender      | Nodemailer     |
| Storage           | JSON File      |

---

## 📦 Dependencies

```json
"dependencies": {
  "bullmq": "^5.49.0",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "fs-extra": "^11.3.0",
  "ioredis": "^5.6.1",
  "nodemailer": "^6.10.1",
  "uuid": "^11.1.0"
}
