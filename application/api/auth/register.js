import { Kv, ulid } from "../../../deps.js";

export default async (req) => {
  const data = await req.json();
  const id = ulid();
  await Kv.set("member," + id, data.value);
  return { id };
};
