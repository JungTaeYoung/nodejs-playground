// syncFn         : 1.2170000076293945ms
// syncFnWithAwait: 55.6705002784729ms
// asyncFn        : 34.23654127120972ms
// parallelAsyncFn: 144.08054208755493ms
// syncFn         : 1.3948750495910645ms
// syncFnWithAwait: 29.325000286102295ms
// asyncFn        : 27.240041255950928ms
// parallelAsyncFn: 134.50333309173584ms
import { measureFunction } from "../utils/function-performance.js";

async function asyncNormal() {}
function syncNormal() {}

const maseure = async () => {
  // 배열로 모아서 병렬 처리
  const parallelAsyncFn = async function () {
    const promises = [];
    for (let i = 0; i < 1e6; i++) {
      promises.push(asyncNormal()); // 비동기 작업을 모두 모은 뒤 병렬 처리
    }
    await Promise.all(promises); // 병렬 실행
  };

  // await 사용한 함수
  const asyncFn = async function () {
    for (let i = 0; i < 1e6; i++) {
      await asyncNormal();
    }
  };

  // await 사용하지 않은 함수
  const syncFn = async function () {
    for (let i = 0; i < 1e6; i++) {
      syncNormal();
    }
  };

  // 동기함수지만 await 사용한 함수
  const syncFnWithAwait = async function () {
    for (let i = 0; i < 1e6; i++) {
      await syncNormal();
    }
  };

  for (let i = 0; i < 2; i++) {
    await measureFunction("syncFn         ", syncFn);
    await measureFunction("syncFnWithAwait", syncFnWithAwait);
    await measureFunction("asyncFn        ", asyncFn);
    await measureFunction("parallelAsyncFn", parallelAsyncFn);
  }
};

maseure();
