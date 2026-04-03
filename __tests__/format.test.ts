import { FormatCurrency } from "@/lib/format";

describe("Format Currency", () => {
  it("formats a KES amount", () => {
    expect(FormatCurrency(5000)).toContain("5,000");
  });

  it("accepts different currencies", () => {
    expect(FormatCurrency(100, "USD")).toContain("100");
  });
});
