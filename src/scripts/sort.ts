import { sortYamlFile } from "src/utils";

const files = {
  prodLocalesFilename: "prod.en.yml",
  fixedLocalesFilename: "en.yml",
  stagingLocalesFilename: "staging.en.yml",
};

Object.values(files).forEach(sortYamlFile);
