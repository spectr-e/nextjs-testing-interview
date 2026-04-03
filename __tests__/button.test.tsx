import { Button } from "@/app/components/button";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Submit" onClick={jest.fn()} />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handler = jest.fn();

    render(<Button label="Go" onClick={handler} />);
    await user.click(screen.getByRole("button"));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("is disabled when prop is set", () => {
    render(<Button label="Wait" onClick={jest.fn()} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
