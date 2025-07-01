import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const FILE_PATH = "./storage/emails.json";

export const saveEmailData = async (id, data) => {
  const emails = await fs.readJson(FILE_PATH).catch(() => ({}));
  emails[id] = data;
  await fs.writeJson(FILE_PATH, emails, { spaces: 2 });
};

export const updateEmailStatus = async (id, updates) => {
  const emails = await fs.readJson(FILE_PATH).catch(() => ({}));
  if (!emails[id]) return;
  emails[id] = {
    ...emails[id],
    ...updates,
    last_attempt_at: new Date().toISOString(),
  };
  await fs.writeJson(FILE_PATH, emails, { spaces: 2 });
};

export const getEmailStatus = async (id) => {
  const emails = await fs.readJson(FILE_PATH).catch(() => ({}));
  return emails[id];
};
