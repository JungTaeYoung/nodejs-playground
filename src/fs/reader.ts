import { readdir } from "fs/promises";
import { join } from "path";

async function readFiles() {
  const dirPath = join(__dirname, "test");
  const files = await readdir(dirPath, { recursive: true });
  console.log(files);
}

readFiles();
