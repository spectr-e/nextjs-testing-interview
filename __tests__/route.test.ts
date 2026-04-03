import { GET } from "@/app/api/users/route";

describe("GET /api/users", () => {
  it("returns all users", async () => {
    const req = new Request("http://localhost/api/users");
    const res = await GET(req);
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toHaveLength(1);
  });

  it("returns 404 for unknown id", async () => {
    const req = new Request("http://localhost/api/users?id=999");
    const res = await GET(req);
    expect(res.status).toBe(404);
  });
});
