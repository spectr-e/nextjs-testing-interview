import { UserCard } from "@/app/components/userCard";
import { server } from "@/mocks/server";
import { render, screen } from "@testing-library/react";
import { HttpResponse, http } from "msw";

describe("Usercard Integration", () => {
  it("fetches and displays user", async () => {
    render(<UserCard userId="1" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await screen.findByText("Josiah");
  });

  it("shows error on 404", async () => {
    // override handler for this test only
    server.use(
      http.get("/api/users/99", () =>
        HttpResponse.json({ error: "Not found" }, { status: 404 }),
      ),
    );

    render(<UserCard userId="99" />);
    await screen.findByText(/not found/i);
  });
});
