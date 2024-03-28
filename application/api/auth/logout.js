export default async (req) => {
  await req.session.destroy();
};
