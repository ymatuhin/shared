import debug from "debug";
import { isDev } from "is/env";

if (isDev && !localStorage.debug) {
  localStorage.debug = "*";
}

type Log = { (name: string, ...rest: any[]): void };
export type Logger = (name: string) => Log;
export type Domain = (name: string) => (name: string) => Log;

export const logger: Logger = (name: string) => {
  const log = debug(name);
  const logger: Log = (message, ...args) => {
    try {
      log(`%c${message}`, "font-weight: bold", ...structuredClone(args));
    } catch (e) {
      log(`%c${message}`, "font-weight: bold", ...args);
    }
  };
  return logger;
};
export const domain: Domain = (domain) => (name) => logger(`${domain} ${name}`);

export const decorator =
  (log: Log) =>
  (_: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      log(propertyKey, ...args);
      const result = originalMethod.apply(this, args);
      if (result !== undefined) log("✔️ " + propertyKey, result);
      return result;
    };

    return descriptor;
  };
