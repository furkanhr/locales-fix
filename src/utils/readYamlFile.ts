import * as path from "node:path";
import yaml from "js-yaml";

import { Dictionary } from "src/types/Dictionary";
import { readFileSync } from "./readFileSync";

export function readYamlFile<Shape = Dictionary>(filename: string): Shape {
  const file = readFileSync(
    path.resolve(process.cwd(), "src", "yaml-files", filename)
  );

  try {
    const jsonData = yaml.load(file, { json: true }) as Shape;
    return jsonData;
  } catch (error) {
    console.error("Oops! something went wrong while READING the yaml file!");
    throw error;
  }
}
