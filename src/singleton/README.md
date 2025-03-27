### 싱글톤 테스트

signleton 테스트: 125.678ms  
싱글톤 후 - RSS: 511.30 MB  
싱글톤 후 - Heap Total: 469.19 MB  
싱글톤 후 - Heap Used: 430.92 MB

non-singleton 테스트: 567.716ms  
non-singleton 후 - RSS: 712.67 MB  
non-singleton 후 - Heap Total: 635.50 MB  
non-singleton 후 - Heap Used: 598.31 MB

### 알게된 점

- 싱글톤을 사용하면 메모리 누수를 줄여주고 속도도 빠르다고 생각했다. 하지만 실험결과는 객채생성만하는 코드가 빨랐다. 아래 분리처리때문 일지 몰라도 `non-singleton` 이 더 빠르다.

```ts
if (this.instance === null) {
  this.instance = new Singleton("signleton");
}
```

- GC덕분에 간단하게 객체를 생성하는 코드가 더 빠르다.
- GC가 동작하지않게 생성된 객체를 배열에 담아둬서 테스트해보았다.
- 메모리가 쌓일 수록 싱글톤 클래스가 더 빠르게 나타났다. 실무에서 사용할 때는 상황에 따라 적절히 사용하는 것이 중요할 것 같다.
