import { Kv } from "../../../deps.js";

export default async (req, res) => {
  let row = await Kv.get("member," + req.searchParams.id);
  if (!row) {
    res.set("status", 500);
    return;
  }
  row = Object.assign({
    id: req.searchParams.id,
  }, row);
  await req.session.set("member", row);
};
