export function FormatCurrency(amount: number, currency = "KES"): string {
  if (amount < 0) throw new Error("Negative amounts not allowed");

  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency,
  }).format(amount);
}
