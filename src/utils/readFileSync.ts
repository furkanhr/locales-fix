import * as fs from "node:fs";
import * as path from "node:path";

export function readFileSync(filename: string): string {
  return fs
    .readFileSync(path.resolve(filename), {
      encoding: "utf-8",
    })
    .trimEnd(); // ? Get rid of the trailing empty line
}
