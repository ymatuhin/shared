export type IDebug = (..._args: any[]) => void;
export type I18Locale = 'ru' | 'en' | 'be' | 'uk';
export type I18CardinalFn = (
  count: number
) => 'zero' | 'one' | 'few' | 'many' | 'other';
export type I18Translation = { [key: string]: I18Translation | string };
