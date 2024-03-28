import "https://deno.land/std@0.221.0/dotenv/load.ts";
import { Igniter, Mail, routes } from "./deps.js";

await Mail.setup({
  connect: {
    hostname: Deno.env.get("MAIL_CONNECT_HOSTNAME"),
    port: parseInt(Deno.env.get("MAIL_CONNECT_PORT")),
    username: Deno.env.get("MAIL_CONNECT_USERNAME"),
    password: Deno.env.get("MAIL_CONNECT_PASSWORD"),
  },
  send: {
    from: Deno.env.get("MAIL_SEND_FROM"),
    to: Deno.env.get("MAIL_SEND_TO"),
    subject: Deno.env.get("MAIL_SEND_SUBJECT"),
  },
}).catch(() => {
  console.log("notice: smtp connection failed.");
});

await Igniter.ignite({
  routes,
  appPath: import.meta.dirname + "/application",
});
