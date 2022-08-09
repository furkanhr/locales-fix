import * as path from "node:path";

import { logger, readKeys, readYamlFile, writeYamlFile } from "./utils";
import { EnYml, Dictionary } from "./types";

logger.cleanup();

const enYmlFilename = "en.friday.yml";
const ymlOutputFilename = "en.fixed.yml";
const enRemainingFilename = 'en.remaining.yml'
// const enYmlFilename = "example.yml";
// const ymlOutputFilename = "example.output.yml";

const fixedEnYml: EnYml = {
  en: {
    examples: {},
    lydia: {},
  },
};

const enYml = readYamlFile<EnYml>(enYmlFilename);

// ? Rename the root directory back to 'lydia'
enYml.en.lydia = enYml.en.form || {};
delete enYml.en.form;

// ? Fix a wrong placement and delete the redundant directory `page`
const key = 'reservations_count'
const translation = enYml.en.lydia.page.reservations[key]
enYml.en.lydia.pages.reservations[key] = translation
delete enYml.en.lydia.page

// * Part 1: Assemble the `form` directory
const formKeysPath = path.resolve(process.cwd(), "form-keys.txt");
const formKeys = readKeys(formKeysPath);

const form: Dictionary = {};

logger.log(`Extracting "form" keys...\n`);

for (const key of formKeys) {
  form[key] = enYml.en.lydia[key];

  delete enYml.en.lydia[key];

  const logMessage = `I've found "${key}" under "lydia" and moved out to "form".\n`;

  logger.log(logMessage);
}

fixedEnYml.en.lydia.form = form;

// * Part 2: Assemble the `lydia` directory
const lydiaKeysPath = path.resolve(process.cwd(), "lydia-keys.txt");
const lydiaKeys = readKeys(lydiaKeysPath);

logger.log(`Extracting "lydia" keys...\n`);

for (const key of lydiaKeys) {
  const isValid = !!enYml.en.lydia[key];

  if (!isValid) continue;

  fixedEnYml.en.lydia[key] = enYml.en.lydia[key];

  delete enYml.en.lydia[key];

  logger.log(`I've found "${key}" under "lydia"\n`);
}

// ? Lastly, add the `examples` back, and we're done
fixedEnYml.en.examples = enYml.en.examples;
delete enYml.en.examples

writeYamlFile(ymlOutputFilename, fixedEnYml);

// ? All the keys remain are misplaced or obsolete.
writeYamlFile(enRemainingFilename, enYml);

logger.log("✅ Completed Successfully!");
