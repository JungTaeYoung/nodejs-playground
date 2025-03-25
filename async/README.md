# 비동기 함수 성능 비교 테스트

## 알게된 점

동기함수에 **await를 사용하면 내부적으로 Promise로 래핑**되어 성능이 떨어진다.
당연히 동기함수에 await를 사용하지 않겠지만,
강의나 블로그에서 소개하는 예제에서도 차이가 없다고해서 테스트해봤다.

## 테스트 결과

**syncFn : 1.2170000076293945ms**
syncFnWithAwait: 55.6705002784729ms
asyncFn : 34.23654127120972ms
parallelAsyncFn: 144.08054208755493ms
syncFn : 1.3948750495910645ms
syncFnWithAwait: 29.325000286102295ms
asyncFn : 27.240041255950928ms
parallelAsyncFn: 134.50333309173584ms
