import { invert } from "./invert";

export const isNumber = (arg: unknown) => Number.isFinite(arg);
export const isNotNumber = invert(isNumber);
export const isInt = (arg: unknown) => Number.isInteger(arg);
export const isNotInt = invert(isInt);
