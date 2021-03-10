import type { IDebug, I18Locale, I18CardinalFn, I18Translation } from './types';
import { merge, isString, isNumber, isObject, isFunction, get } from 'lodash';

let debug: IDebug = () => {};
let locale: I18Locale | void = undefined;
let translations: { [lang in I18Locale]?: I18Translation } = {};
let cardinalFns: { [lang in I18Locale]?: I18CardinalFn } = {};

type InitParams = {
  debug?: IDebug;
  locale: I18Locale;
  translation: I18Translation;
  cardinalFn: I18CardinalFn;
};
export const init = ({
  debug: inputDebug,
  locale,
  translation,
  cardinalFn,
}: InitParams) => {
  if (inputDebug) debug = inputDebug;
  changeLocale(locale);
  addTranslation({ locale, translation });
  addCardinalFn({ locale, cardinalFn });
};

export const changeLocale = (newLocale: I18Locale) => (locale = newLocale);

export const addTranslation = ({
  locale,
  translation,
}: {
  locale?: I18Locale;
  translation?: I18Translation;
}) => {
  if (!locale || !isString(locale))
    throw new Error(`"locale" should be string`);
  if (!translation || !isObject(translation))
    throw new Error(`"translation" should be object`);
  translations[locale] = merge(translations[locale], translation);
};

export const addCardinalFn = ({
  locale,
  cardinalFn,
}: {
  locale: I18Locale;
  cardinalFn: I18CardinalFn;
}) => {
  if (!locale || !isString(locale))
    throw new Error(`"locale" should be string`);
  if (!cardinalFn || !isFunction(cardinalFn))
    throw new Error(`"cardinalFn" should be function`);
  cardinalFns[locale] = cardinalFn;
};

export const translate = (path: string, count: number) => {
  if (!locale) {
    debug(`Unset "locale", use "changeLocale" or "init" methods to set it up`);
    return '';
  }

  const translation = get(translations[locale], path);

  if (isString(translation)) return translation;
  if (isObject(translation))
    return getPluralValue({ translation, locale, path, count });

  debug(`No translation for path: "${path}"`);
  return '';
};

type GetPluralValueParams = {
  locale: I18Locale;
  translation: I18Translation;
  path: string;
  count: number;
};
function getPluralValue({
  locale,
  translation,
  count,
  path,
}: GetPluralValueParams) {
  let defaultValue = translation['*'] ?? '';
  const cardinalFn = cardinalFns[locale];

  if (!isNumber(count)) {
    debug(`Invalid "count" type for path: "${path}"`);
    return defaultValue;
  }

  if (!cardinalFn) {
    debug(`No pluralize function for locale: ${locale}`);
    return defaultValue;
  }

  const countType = cardinalFn(count);
  if (!isString(translation[countType])) {
    debug(`No translation for path: "${path}.${countType}"`);
    return defaultValue;
  }

  return withCount(translation[countType] as string, count);
}

function withCount(str: string, count: number) {
  const x = class {};
  const z = '123' as string;
  const e = 123;
  const w = undefined;
  const r = true;
  const r2 = () => {};
  x + z + w + e + r + r2;

  return str.replaceAll('{n}', String(count));
}
