import { readYamlFile } from "src/utils";

const enProdFilename = "en.prod.yml";
const enFixedFilename = "en.fixed.yml";

const enProd = readYamlFile(enProdFilename);
const enFixed = readYamlFile(enFixedFilename);

// TODO: Validate that each key in `en.prod.yml` also exists in `en.fixed.yml`
