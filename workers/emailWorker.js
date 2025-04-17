import { Worker } from "bullmq";
import IORedis from "ioredis";
import { sendEmail } from "../emailService.js";
import { updateEmailStatus } from "../utils/storage.js";

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
});

const worker = new Worker(
  "emailQueue",
  async (job) => {
    const { id, to, subject, body } = job.data;
    try {
      await sendEmail({ to, subject, body });
      await updateEmailStatus(id, {
        status: "delivered",
        attempts: job.attemptsMade + 1,
      });
    } catch (err) {
      if (job.attemptsMade >= 2) {
        await updateEmailStatus(id, { status: "failed", attempts: 3 });
      } else {
        throw err;
      }
    }
  },
  {
    connection,
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 1000,
    },
  }
);
