import { invert } from "./invert";

export const isDate = (date: unknown) =>
  Object.prototype.toString.call(date) === "[object Date]";
export const isNotDate = invert(isDate);
