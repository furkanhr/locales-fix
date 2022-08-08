import path from "path";

import { readFileSync } from "../utils/readFileSync";

export function extractTopLevelKeys() {
  const tLinesFilename = "t_calls_with_form_keys.txt";
  // const tLinesFilename = "example.txt";

  const tLinesFile = readFileSync(
    path.resolve(__dirname, "shell", tLinesFilename)
  );

  const tLines = tLinesFile.split("\n");

  const selectTopLevelKeys = /t[(]['"]form[.]([\w]+)[\w.]*?["'].*[)]/g;

  const topLevelKeysWithDuplicates = tLines.map((line) =>
    line.replace(selectTopLevelKeys, "$1")
  );

  const topLevelKeysUnderFormDirectory = new Set(topLevelKeysWithDuplicates);

  return topLevelKeysUnderFormDirectory;
}
