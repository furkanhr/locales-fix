import path from "node:path";

import { readFileSync } from "./readFileSync";

export function readKeys(filename: string) {
  const keysFile = readFileSync(
    path.resolve(process.cwd(), "src", "shell", filename)
  );

  const keysWithDuplicates = keysFile.split("\n");

  const keys = new Set(keysWithDuplicates);

  return keys;
}
