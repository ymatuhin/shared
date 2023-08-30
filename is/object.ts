import { invert } from "./invert";

export const isObject = (obj: unknown) => {
  const type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
};

export const isNotObject = invert(isObject);
export const isEmptyObject = (arg: unknown) =>
  isObject(arg) && Object.keys(arg as {}).length === 0;

export const isNotEmptyObject = (arg: unknown) =>
  isObject(arg) && Object.keys(arg as {}).length > 0;
