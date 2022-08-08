import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

function sortYamlFile(filename) {
  const file = fs.readFileSync(path.resolve(filename));
  const data = yaml.load(file, { json: true });
  const sortedData = yaml.dump(data, { sortKeys: true, lineWidth: -1 });
  fs.writeFileSync(path.resolve(filename), sortedData);
}

const files = {
  prodLocalesFilename: "prod.en.yml",
  fixedLocalesFilename: "en.yml",
  stagingLocalesFilename: "staging.en.yml",
};

Object.values(files).forEach(sortYamlFile);
