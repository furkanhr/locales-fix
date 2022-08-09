import { Dictionary } from "./Dictionary";

export interface EnYml extends Dictionary {
  en: {
    examples?: Dictionary;
    lydia: Dictionary;
    form?: Dictionary;
  };
}
