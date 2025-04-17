import { emailQueue } from "./queue/emailQueue.js";
import { saveEmailData } from "./utils/storage.js";
import { v4 as uuidv4 } from "uuid";

export const scheduleEmail = async (email) => {
  const id = uuidv4();
  const delay = new Date(email.send_at).getTime() - Date.now();

  await emailQueue.add(id, { id, ...email }, { delay });

  await saveEmailData(id, {
    id,
    status: "scheduled",
    attempts: 0,
    last_attempt_at: null,
    ...email,
  });

  return { id, status: "scheduled" };
};
