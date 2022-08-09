import * as fs from "node:fs";
import * as path from "node:path";
import yaml, { DumpOptions } from "js-yaml";

import { Dictionary } from "../../src/types/Dictionary";

export function writeYamlFile(
  filename: string,
  data: Dictionary,
  options?: DumpOptions
) {
  const ymlOutput = yaml.dump(data, {
    skipInvalid: true,
    lineWidth: -1,
    sortKeys: true,
    ...options,
  });

  fs.writeFileSync(
    path.resolve(process.cwd(), "src", "yaml-files", filename),
    ymlOutput
  );
}
