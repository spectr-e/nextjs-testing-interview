const users = [{ id: 1, name: "Josiah" }];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const user = users.find((u) => u.id === Number(id));
    if (!user)
      return new Response(JSON.stringify({ error: "Not Found" }), {
        status: 404,
        headers: { "Content-type": "application/json" },
      });
    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
}
