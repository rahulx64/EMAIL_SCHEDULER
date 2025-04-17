import express from "express";
import dotenv from "dotenv";
import { scheduleEmail } from "./scheduler.js";
import { getEmailStatus } from "./utils/storage.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/schedule", async (req, res) => {

  const { to, subject, body, send_at } = req.body;
//   Simple validations
  if (
    !to ||
    !subject ||
    !body ||
    !send_at ||
    isNaN(Date.parse(send_at)) ||
    new Date(send_at) <= new Date()
  ) {
    return res
      .status(400)
      .json({ error: "Invalid request payload or past date" });
  }

  const result = await scheduleEmail({ to, subject, body, send_at });
  res.json(result);
});
// app.post("/schedule", (req, res) => {
//   const { to, subject, body, send_at } = req.body;
//   console.log(`Scheduled Email: To ${to}, At ${send_at}`);
//   res.json({ id: "dummy-id-123", status: "scheduled" });
// });

app.get("/status/:id", async (req, res) => {
  const id = req.params.id;
  const status = await getEmailStatus(id);

  if (!status) return res.status(404).json({ error: "Email ID not found" });
  res.json(status);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
