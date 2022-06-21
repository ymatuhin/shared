import { invert } from "./invert";

export const isString = (str: unknown) => typeof str === "string";
export const isNotString = invert(isString);
