import { sortYamlFile } from "../utils";

// ? The first two args are paths of node and this file respectively.
const [filename] = process.argv.slice(2);

sortYamlFile(filename)
