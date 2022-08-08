import { Dictionary } from "src/types/Dictionary";
import { readFormKeys } from "./scripts";
import { logger, readYamlFile, writeYamlFile } from "./utils";
import { EnYml } from "./types";

logger.cleanup();

const enYmlFilename = "en.yml";
const ymlOutputFilename = "en.yml";
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
const formKeys = readFormKeys();

const form: Dictionary = {};

for (const key of formKeys) {
  // enYml.en.lydia.form[key] = enYml.en.lydia[key];
  form[key] = enYml.en.lydia[key];

  delete enYml.en.lydia[key];

  const logMessage = `\nI've found "${key}" under "lydia" and moved out to "form".`;

  logger.log(logMessage);
}

fixedEnYml.en.form = form;

// * Part 2: Assemble the `lydia` directory
// const lydiaKeys = readLydiaKeys();

// for (const key of lydiaKeys) {
//   fixedEnYml.en.lydia[key] = enYml.en.lydia[key]

//   delete enYml.en.lydia[key];

//   const logMessage = `\nI've found "${key}" under "lydia"`;

//   logger.log(logMessage);
// }

writeYamlFile(enYml, fixedEnYml);
