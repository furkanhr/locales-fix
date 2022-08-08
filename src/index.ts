import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

import { extractTopLevelKeys } from "./scripts";
import { readYamlFile } from "./utils";
import { EnYml } from "./types";

const logFilename = "logs.txt";
fs.writeFileSync(path.resolve(__dirname, logFilename), "");

const topLevelKeysUnderFormDirectory = extractTopLevelKeys();

// * Part 2: Move the keys that were originally under the form directory
// * from the lydia directory back to the form directory

const enYmlFilename = "en.yml";
const ymlOutputFilename = "en.yml";
// const enYmlFilename = "example.yml";
// const ymlOutputFilename = "example.output.yml";

try {
  const enYml = readYamlFile<EnYml>(enYmlFilename);

  // ? Rename the root directory back to 'lydia'
  enYml.enYml.en.lydia = enYml.en.form;
  delete enYml.en.form;

  enYml.en.lydia.form = {};

  for (const key of topLevelKeysUnderFormDirectory) {
    enYml.en.lydia.form[key] = enYml.en.lydia[key];

    delete enYml.en.lydia[key];

    const logMessage = `\nI've found "${key}" under "lydia" and moved out to "form".`;

    console.log(logMessage);
    fs.appendFileSync(path.resolve(__dirname, logFilename), logMessage);
  }

  const ymlOutput = yaml.dump(enYml, { skipInvalid: true, lineWidth: -1 });

  fs.writeFileSync(
    path.resolve(__dirname, "yaml-files", ymlOutputFilename),
    ymlOutput
  );
} catch (error) {
  console.error("Oops! something went wrong!", error);
}
