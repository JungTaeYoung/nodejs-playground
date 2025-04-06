### 1. 파일 감시 (watcher.ts)

- `fs/promises`의 `watch` API를 사용하여 폴더 변경 사항을 실시간으로 모니터링
- 두 개의 테스트 폴더(`test`, `test2`)를 동시에 감시
- 1초 간격으로 각 폴더에 새로운 테스트 파일 생성
- 파일 변경 이벤트 발생 시 콘솔에 로그 출력
  - 파일 이름 변경 시: "[파일명] 파일이 이름을 변경했습니다."
  - 파일 내용 변경 시: "[파일명] 파일이 변경되었습니다."

### 2. 파일 읽기 (reader.ts)

- `fs/promises`의 `readdir` API를 사용하여 디렉토리 내 파일 목록 조회
- `test` 디렉토리의 모든 파일을 재귀적으로 읽어옴

## 사용된 주요 API

- `fs/promises.watch`: 파일 시스템 변경 감지
- `fs/promises.mkdir`: 디렉토리 생성
- `fs/promises.writeFile`: 파일 쓰기
- `fs/promises.readdir`: 디렉토리 내용 읽기

## 다른 라이브러리 사용

- [chokidar](https://github.com/paulmillr/chokidar)
- fs.watch 는 OS에 따라 동작이 다르다 예시로
-
- chokidar 는 모든 OS에서 동작하는 것을 보장한다.
- 또한 파일 이름 변경, 삭제, 속성 변경 등 다양한 이벤트를 지원한다.

| OS               | 동작 방식                             |
| ---------------- | ------------------------------------- |
| macOS (FSEvents) | rename 한 번만, b.txt 이름으로        |
| Linux (inotify)  | 보통 rename 두 번, a.txt → b.txt 각각 |
| Windows          | 둘 다 감지 못하거나, b.txt만 감지     |

```ts
import chok from "chok";

chok.watch("./test", (event) => {
  console.log(event);
});
```
