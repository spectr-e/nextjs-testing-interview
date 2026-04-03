import { useState } from "react";

export function useCounter(intial = 0) {
  const [count, setCount] = useState(intial);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(intial);
  return { count, increment, reset };
}
