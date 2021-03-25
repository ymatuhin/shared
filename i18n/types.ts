import type { Writable } from "svelte/store";

export type BaseLocale = "en" | "ru";
export type Translation = { [key: string]: Translation | string };
export type Params<Locale extends string> = {
  locale: Locale;
  translation: Translation;
};

export type I18nStore<Locale> = {
  status: "initial" | "loading" | "fallback" | "loaded";
  locale: Locale;
  translation: Translation;
};
export type Data<Locale extends string> = {
  [K in Locale]?: Translation;
};
export type Loader = () => Promise<{ default: Translation }>;
export type Loadable<Locale extends string> = {
  [K in Locale]?: Loader;
};

export type I18n<Locale> = {
  addLocale: (locale: Locale, translation: Translation) => Translation;
  addLoadable: (locale: Locale, cardinalLoader: Loader) => Loader;
  changeLocale: (locale: Locale) => Promise<void>;
} & Writable<I18nStore<Locale>>;
