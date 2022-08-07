import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

// * Part 1: Extract the top-level keys under the form directory
// * from `t()` lines

const tLinesFilename = "t_calls_with_form_keys.txt";
// const tLinesFilename = "example.txt";

const tLinesFile = fs
  .readFileSync(path.resolve(tLinesFilename), {
    encoding: "utf-8",
  })
  .trimEnd();

const tLines = tLinesFile.split("\n");

const selectTopLevelKeys = /t[(]['"]form[.]([\w]+)[\w.]*?["'].*[)]/g;

const topLevelKeysWithDuplicates = tLines.map((line) =>
  line.replace(selectTopLevelKeys, "$1")
);

const topLevelKeysUnderFormDirectory = new Set(topLevelKeysWithDuplicates);

// * Part 2: Move the keys that were originally under the form directory
// * from the lydia directory back to the form directory

const enYmlFilename = "en.yml";
const ymlOutputFilename = "en.fixed.yml";
// const enYmlFilename = "example.yml";
// const ymlOutputFilename = "example.output.yml";
const logFilename = "logs.txt";

try {
  const enYmlFile = fs.readFileSync(path.resolve(enYmlFilename), {
    encoding: "utf-8",
  });

  const enYml = yaml.load(enYmlFile, { json: true });

  // ? Rename the root directory back to 'lydia'
  enYml.en.lydia = enYml.en.form;
  delete enYml.en.form;

  enYml.en.lydia.form = {};

  for (const key of topLevelKeysUnderFormDirectory) {
    enYml.en.lydia.form[key] = enYml.en.lydia[key];

    delete enYml.en.lydia[key];

    const logMessage = `\nI've found "${key}" under "lydia" and moved out to "form".`;
    console.log(logMessage);
    fs.appendFileSync(path.resolve(logFilename), logMessage);
  }

  const ymlOutput = yaml.dump(enYml);
  fs.writeFileSync(path.resolve(ymlOutputFilename), ymlOutput);
} catch (error) {
  console.error("Oops! something went wrong!", error);
}
