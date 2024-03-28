import { Kv } from "../../../deps.js";

export default async (req) => {
  const id = (await req.session.get("member")).id;
  await req.session.destroy();
  await Kv.delete("member," + id);
};
