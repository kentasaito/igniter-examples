import { Kv } from "../../deps.js";

export default async () => {
  const group = await Kv.getGroup("image");
  return { group };
};
