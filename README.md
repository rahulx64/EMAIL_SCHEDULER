<p align="center">
  <img src="https://img.shields.io/badge/BullMQ-5.49.0-red?logo=redis&style=for-the-badge" />
  <img src="https://img.shields.io/badge/dotenv-16.5.0-8DD6F9?logo=dotenv&style=for-the-badge" />
  <img src="https://img.shields.io/badge/express-5.1.0-black?logo=express&style=for-the-badge" />
  <img src="https://img.shields.io/badge/fs--extra-11.3.0-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/ioredis-5.6.1-DD0031?logo=redis&style=for-the-badge" />
  <img src="https://img.shields.io/badge/nodemailer-6.10.1-yellow?logo=maildotru&style=for-the-badge" />
  <img src="https://img.shields.io/badge/uuid-11.1.0-purple?style=for-the-badge" />
</p>

#  Email Scheduling Backend

An email scheduling backend system built using **BullMQ**, **Express**, **Nodemailer**, and **Redis**, designed to schedule and send emails reliably with retry support.

---

##  Working Mechanism

###  BullMQ (Queue System)
- Uses **Redis** as a backend for job queues.
- Communicates via **TCP protocols**, providing fast and persistent messaging.
- Jobs are stored in a **Sorted Set** based on their scheduled execution time.
- A **Producer Queue** adds jobs to Redis.
- A **Worker Queue** monitors the queue and processes jobs at the right time.

### Nodemailer (Email Sender)
- Uses the **SMTP protocol** to send emails.
- Sends scheduled emails processed by the worker.

###  Postman (API Testing)
- Used for testing REST API endpoints of the backend.

###  Data Storage
- Email job details are stored locally using a **JSON file**.

###  Worker Queue
- Listens for jobs when their scheduled time arrives.
- Retries sending emails up to **3 times** if a failure occurs.
- Job statuses: `completed`, `failed`, `retrying`.

###  Docker (Redis Hosting)
- Redis is hosted inside a **Docker container** for isolated and scalable usage.

###  ioredis
- Advanced Redis client for Node.js.
- Supports features like pub/sub, cluster, and pipelines.

###  Sorted Set in Redis
- Redis structure where jobs are sorted based on execution time.
- Enables efficient retrieval of scheduled jobs.

---

##  Project Stack

| Component         | Technology     |
|------------------|----------------|
| API Framework     | Express.js     |
| Queue System      | BullMQ         |
| Queue Backend     | Redis          |
| Email Sender      | Nodemailer     |
| Storage           | JSON File      |

---

##  Dependencies

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
