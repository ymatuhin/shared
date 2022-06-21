import { invert } from "./invert";

export const isObject = (obj: unknown) =>
  Object.prototype.toString.call(obj) === "[object Object]";
export const isNotObject = invert(isObject);
export const isEmptyObject = (arg: unknown) =>
  isObject(arg) && Object.keys(arg).length === 0;
export const isNotEmptyObject = (arg: unknown) =>
  isObject(arg) && Object.keys(arg).length > 0;
