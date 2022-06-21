import { invert } from "./invert";

export const isDefined = (any: unknown) => typeof any !== "undefined";
export const isNotUndefined = isDefined;
export const isNotDefined = invert(isDefined);
export const isUndefined = invert(isDefined);
