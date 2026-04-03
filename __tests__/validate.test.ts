import { Validate } from "@/lib/validate";

it("accepts valid email", () => {
  expect(Validate("hi@mail.com")).toBe(true);
});

it("rejects missing @", () => {
  expect(Validate("notanemail")).toBe(false);
});
