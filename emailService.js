import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs-extra";
import path from "path";

dotenv.config();

export const sendEmail = async ({ to, subject, body }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    text: body,
  });

  console.log(`Email sent to ${to}`);
};

