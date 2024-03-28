export default async (req) => {
  let count = (await req.session.get("count")) ?? 0;
  count++;
  await req.session.set("count", count);
  if (count >= 10) {
    await req.session.destroy();
    count = 0;
  }
  return { count };
};
