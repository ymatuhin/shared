import type {  IDebug, I18Locale, I18Translation, I18CardinalFn } from './types';
import { init } from './core';

type IStringified = {
  locale: I18Locale,
  translation: I18Translation,
  cardinalFn: string
}

type LoadAndStringifyParams = {
  locale: I18Locale,
  translationLoader: Promise<{ default: I18Translation }>;
  cardinalLoader: Promise<{ default: I18CardinalFn }>
};

export const loadAndStringify = ({ locale, translationLoader, cardinalLoader }: LoadAndStringifyParams) => {
  return Promise.all([ translationLoader, cardinalLoader ])
    .then(([{ default: translation }, { default: cardinalFn }]) => {
      const stringifed: { i18n: IStringified } = {
        i18n: {
          locale,
          translation,
          cardinalFn: cardinalFn.toString(),
        }
      }
      return stringifed;
    });
};

export const parseAndInit = (i18n: IStringified, debug?: IDebug) => {
  console.info(`# [i18n <<]`, i18n)
  if (!i18n) throw new Error(`"i18n" should be provided, have you called "loadAndStringify" on server?`);
  const { locale, translation, cardinalFn: cardinalFnString } = i18n;
  const cardinalFn = new Function('return ' + cardinalFnString)();
  init({ locale, translation, cardinalFn, debug })
};
