import * as fs from "node:fs";
import * as path from "node:path";

export const logger = {
  logsFilename: "logs.txt",

  cleanup() {
    fs.writeFileSync(path.resolve(process.cwd(), this.logsFilename), "");
  },

  log(message: string, silent = false) {
    if (!silent) console.info(message);

    fs.appendFileSync(path.resolve(process.cwd(), this.logsFilename), message);
  },
};
