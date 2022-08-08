import { Dictionary } from "src/types";

export function createPathMapOf(dict: Dictionary) {
  const pathMap: string[][] = [];
  const path: string[] = [];

  function stepIn(record: Dictionary) {

    for (const key in record) {
      if (!record.hasOwnProperty(key)) continue;

      path.push(key);

      const isOver = typeof record[key] != "object";

      if (isOver) {
        pathMap.push(path);
        path.length = 0;

        continue;
      }

      stepIn(record[key]);
    }
  }

  stepIn(dict);

  return pathMap;
}
