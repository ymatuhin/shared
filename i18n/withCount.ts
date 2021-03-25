import type { I18n } from "./types";
import { trans as translateFn } from "./trans";

type CountObj = { [key: string]: number } & { ordinal?: boolean };

export const withCount = (store: I18n<string>, path: string, countObj: CountObj) => {
  const trans = translateFn(store, path);
  const { ordinal, ...rest } = countObj;
  const format = new Intl.PluralRules(store.locale, {
    type: ordinal ? "ordinal" : "cardinal",
  });

  return Object.entries(rest).reduce((acc, [name, value]) => {
    const pluralObj = translateFn(store, `${path}:${name}`);

    if (typeof pluralObj === "object") {
      const pluralType = format.select(value);
      const stringValue = pluralObj[pluralType] || "";
      if (!stringValue) console.warn(`No translation for "${path}:${name}.${pluralType}"`);
      const stringReplaces = stringValue.replaceAll(`{${name}}`, String(value));
      acc = acc.replaceAll(`{${name}}`, stringReplaces);
    } else {
      acc = acc.replaceAll(`{${name}}`, String(value));
    }

    return acc;
  }, trans);
};
