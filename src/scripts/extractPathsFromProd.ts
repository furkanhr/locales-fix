import * as path from "node:path";

import { createPathMapOf, readYamlFile } from "src/utils";

export function extractPathsFromYamlFile() {
  //   const prodYmlFilename = "prod.en.yml";
  const prodYmlFilename = "example.yml";

  const prodYml = readYamlFile(
    path.resolve(__dirname, "src", "yaml-files", prodYmlFilename)
  );

  createPathMapOf(prodYml);
}
