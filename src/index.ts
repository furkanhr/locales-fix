import * as path from "node:path";

import { logger, readKeys, readYamlFile, writeYamlFile } from "./utils";
import { EnYml, Dictionary } from "./types";

logger.cleanup();

const enYmlFilename = "en.yml";
// const enYmlFilename = "example.yml";
// const ymlOutputFilename = "example.output.yml";

const fixedEnYml: EnYml = {
  en: {
    lydia: {},
  },
};

const enYml = readYamlFile<EnYml>(enYmlFilename);

// ? Rename the root directory back to 'lydia'
enYml.en.lydia = enYml.en.form || {};
delete enYml.en.form;

// * Part 1: Assemble the `form` directory
const formKeysPath = path.resolve(process.cwd(), "form-keys.txt");
const formKeys = readKeys(formKeysPath);

const form: Dictionary = {};

for (const key of formKeys) {
  form[key] = enYml.en.lydia[key];

  delete enYml.en.lydia[key];

  const logMessage = `\nI've found "${key}" under "lydia" and moved out to "form".`;

  logger.log(logMessage);
}

fixedEnYml.en.form = form;

// * Part 2: Assemble the `lydia` directory
const lydiaKeysPath = path.resolve(process.cwd(), "lydia-keys.txt");
const lydiaKeys = readKeys(lydiaKeysPath);

for (const key of lydiaKeys) {
  const isValid = !!enYml.en.lydia[key];

  if (!isValid) continue;

  fixedEnYml.en.lydia[key] = enYml.en.lydia[key];

  delete enYml.en.lydia[key];

  logger.log(`I've found "${key}" under "lydia"`);
}

writeYamlFile(enYmlFilename, fixedEnYml);

console.info("✅ Completed Successfully!")
