import { Dictionary } from "src/types";

export function createPathMapOf(dict: Dictionary) {
  const pathMap: string[][] = [];
  const currentPath: string[] = [];

  function savePathAndStepOut() {
    pathMap.push([...currentPath]);
    currentPath.pop()
  }

  function stepIn(record: Dictionary) {
    for (const key in record) {
      if (!record.hasOwnProperty(key)) continue;

      currentPath.push(key);

      const isOver = typeof record[key] != "object";

      if (isOver) {
        savePathAndStepOut();
        continue;
      }

      stepIn(record[key]);
    }
  }

  stepIn(dict);

  return pathMap;
}
