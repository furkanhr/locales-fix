import { Dictionary } from "src/types";

export function createPathMapOf(dict: Dictionary) {
  const pathMap = [];

  function discover(record: Dictionary) {
    const path = [];

    for (const key in record) {
      if (!record.hasOwnProperty(key)) continue;

      path.push(key);

      const isOver = typeof record[key] != "object";

      if (isOver) {
        pathMap.push(path);
        path.length = 0; // ? Is this necessary?

        continue;
      }

      discover(record[key]);
    }
  }

  discover(dict);
}
