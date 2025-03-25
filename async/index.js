import { deley } from "../utils/deley.js";

async function fn1() {
  return deley(5000);
}

async function fn2() {
  return await deley(5000);
}

async function start() {
  const result = await fn1();
  console.log(result);
  const result2 = await fn2();
  console.log(result2);
}

start();
