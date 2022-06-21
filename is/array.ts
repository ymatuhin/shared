import { invert } from "./invert";

export const isArray = (arr: unknown[]) => Array.isArray(arr);
export const isNotArray = invert(isArray);
export const isEmptyArray = (arr: unknown[]) =>
  isArray(arr) && arr.length === 0;
export const isNotEmptyArray = (arr: unknown[]) =>
  isArray(arr) && arr.length > 0;
