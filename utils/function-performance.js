import { performance } from "perf_hooks";

export async function measureFunction(label, fn) {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  console.log(`${label}: ${end - start}ms`);
  return result;
}
