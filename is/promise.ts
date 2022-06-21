import { invert } from "./invert";

export const isPromise = (arg: unknown) => arg instanceof Promise;
export const isNotPromise = invert(isPromise);
