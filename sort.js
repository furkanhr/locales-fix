import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

const prodLocalesFilename = "prod.en.yml";
const fixedLocalesFilename = "en.yml";

const prodLocalesFile = fs.readFileSync(path.resolve(prodLocalesFilename));
const fixedLocalesFile = fs.readFileSync(path.resolve(fixedLocalesFilename));

const prodLocales = yaml.load(prodLocalesFile, { json: true });
const fixedLocales = yaml.load(fixedLocalesFile, { json: true });

const prodLocalesSorted = yaml.dump(prodLocales, {
  sortKeys: true,
  lineWidth: -1,
});

const fixedLocalesSorted = yaml.dump(fixedLocales, {
  sortKeys: true,
  lineWidth: -1,
});

fs.writeFileSync(path.resolve(prodLocalesFilename), prodLocalesSorted);
fs.writeFileSync(path.resolve(fixedLocalesFilename), fixedLocalesSorted);
