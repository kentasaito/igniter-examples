import { Kv } from "../../deps.js";

export default async (req) => {
  const id = crypto.randomUUID();
  const value = await req.json();
  await Kv.set("image," + id, value);
};
