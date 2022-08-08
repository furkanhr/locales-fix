import * as fs from "node:fs";
import * as path from "node:path";
import yaml, { DumpOptions } from "js-yaml";

import { Dictionary } from "../../src/types/Dictionary";

export function writeYamlFile(
  target: string,
  data: Dictionary,
  options?: DumpOptions
) {
  const ymlOutput = yaml.dump(data, {
    skipInvalid: true,
    lineWidth: -1,
    ...options,
  });

  fs.writeFileSync(path.resolve(__dirname, "yaml-files", target), ymlOutput);
}
