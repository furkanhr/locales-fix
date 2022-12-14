import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

import { readFileSync } from "./readFileSync";

export function sortYamlFile(filename: string) {
  const target = path.resolve(process.cwd(), "src", "yaml-files", filename);

  const file = readFileSync(target);

  const data = yaml.load(file, { json: true });

  const sortedData = yaml.dump(data, { sortKeys: true, lineWidth: -1 });

  fs.writeFileSync(target, sortedData);
}
