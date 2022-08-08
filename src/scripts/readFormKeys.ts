import path from "path";

import { readFileSync } from "../utils/readFileSync";

export function readFormKeys() {
  const formKeysFilename = "form-keys.txt";

  const formKeysFile = readFileSync(
    path.resolve(process.cwd(), "src", "shell", formKeysFilename)
  );

  const formKeysWithDuplicates = formKeysFile.split("\n");

  const formKeys = new Set(formKeysWithDuplicates);

  return formKeys;
}
