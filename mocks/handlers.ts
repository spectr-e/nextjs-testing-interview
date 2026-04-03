import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users/:id", ({ params }) => {
    if (params.id === "99")
      return HttpResponse.json({ error: "Not Found" }, { status: 404 });
    return HttpResponse.json({
      id: params.id,
      name: "Josiah",
    });
  }),
];
