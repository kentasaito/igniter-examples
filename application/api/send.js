import { Mail } from "../../deps.js";

export default async (req) => {
  const data = await req.json();
  await Mail.send({
    content: data.content,
  });
};
