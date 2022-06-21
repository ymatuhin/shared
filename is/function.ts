import { invert } from "./invert";

export const isFunction = (arg: unknown) =>
  Object.prototype.toString.call(arg) === "[object Function]";
export const isNotFunction = invert(isFunction);
