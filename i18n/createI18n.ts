import type {
  BaseLocale,
  Params,
  Data,
  Loadable,
  Translation,
  Loader,
  I18n,
  I18nStore,
} from "./types";

import { writable } from "svelte/store";

export const createI18n = <Locale extends string = BaseLocale>(
  params: Params<Locale>,
): I18n<Locale> => {
  const { locale, translation } = params;

  const i18n = writable<I18nStore<Locale>>({ status: "initial", locale, translation });
  const data: Data<Locale> = {};
  const loadable: Loadable<Locale> = {};

  const changeLocale = async (locale: Locale) => {
    if (data[locale]) {
      const translation = data[locale];
      i18n.update((state) => ({ ...state, locale, translation }));
    } else if (loadable[locale]) {
      i18n.update((state) => ({ ...state, status: "loading" }));
      try {
        const translation = (await loadable[locale]()).default;
        data[locale] = translation;
        i18n.update((state) => ({ ...state, translation, locale, status: "loaded" }));
      } catch (error) {
        i18n.update((state) => ({ ...state, status: "fallback" }));
      }
    } else {
      throw new Error(`i18n no translation provided for "${locale}" locale`);
    }
  };

  const addLocale = (locale: Locale, translation: Translation) => (data[locale] = translation);
  const addLoadable = (locale: Locale, cardinalLoader: Loader) =>
    (loadable[locale] = cardinalLoader);

  addLocale(locale, translation);

  return { ...i18n, addLocale, addLoadable, changeLocale };
};
