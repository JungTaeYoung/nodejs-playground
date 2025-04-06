import { watch, mkdir, FileChangeInfo, writeFile, readdir } from "fs/promises";

async function changeLog(event: FileChangeInfo<string>) {
  const { filename, eventType } = event;

  switch (eventType) {
    case "rename":
      console.log(`${filename} 파일이 이름을 변경했습니다.`);
      break;
    case "change":
      console.log(`${filename} 파일이 변경되었습니다.`);
      break;
  }
}

async function watchFolder(path: string) {
  const existingFiles: string[] = [];

  await mkdir(path, { recursive: true });

  const files = await readdir(path);
  existingFiles.push(...files);

  try {
    const watcher = watch(path, { recursive: true });
    for await (const event of watcher) {
      changeLog(event);
    }
  } catch (err) {}
}

(async function () {
  // test폴더 감지시작
  watchFolder("./test");
  watchFolder("./test2");

  setInterval(() => {
    // 1초마다 폴더 내용 출력

    const now = Date.now();
    writeFile(`./test/test_${now}.txt`, "test");
    writeFile(`./test2/test_${now}.txt`, "test");
  }, 1000);
})();
