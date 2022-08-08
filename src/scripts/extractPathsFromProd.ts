import * as fs from "node:fs";
import * as path from "node:path";

import { createPathMapOf, readYamlFile } from "../utils";

// const prodYmlFilename = "prod.en.yml";
const prodYmlFilename = "example.yml";

const pathname = path.resolve(
  process.cwd(),
  "src",
  "yaml-files",
  prodYmlFilename
);

const prodYml = readYamlFile(pathname);

const pathMap = createPathMapOf(prodYml);

const asString = JSON.stringify(pathMap);

fs.writeFileSync(
  path.resolve(process.cwd(), "src", "shell", "prod.path-map.json"),
  asString
);
