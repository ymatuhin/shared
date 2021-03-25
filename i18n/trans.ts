import type { I18n } from "./types";
import get from "lodash/get";

export const trans = (store: I18n<string>, path: string) => {
  const result = get(store, "translation." + path, null);
  if (result == null) console.warn(`No translation for "${path}"`);
  return result || "";
};
