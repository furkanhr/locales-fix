import { Dictionary } from "./Dictionary";

export interface EnYml extends Dictionary {
  en: {
    lydia: Dictionary & {
      form: Dictionary;
    };
    form?: Dictionary;
  };
}
