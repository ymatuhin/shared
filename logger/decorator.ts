import type { createLogger } from "./logger";

type Log = ReturnType<typeof createLogger>;

export const methodLogger =
  (log: Log) =>
  (_: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = monkeyPatch(log, propertyKey, originalMethod);
    return descriptor;
  };

export const classLogger =
  (log: Log, ignoredKeys: string[] = []) =>
  (originalClass: any) => {
    Object.getOwnPropertyNames(originalClass.prototype)
      .filter((key) => !ignoredKeys.includes(key))
      .forEach((key) => {
        const info = Object.getOwnPropertyDescriptor(
          originalClass.prototype,
          key
        );

        if (info?.writable) {
          const originalMethod = originalClass.prototype[key];
          originalClass.prototype[key] = monkeyPatch(log, key, originalMethod);
        }
      });

    return originalClass;
  };

function monkeyPatch(log: Log, propertyKey: string, originalMethod: Function) {
  return function (...args: any[]) {
    log(`◌ ${propertyKey}`, ...args);
    const result = originalMethod.apply(this, args);
    if (result !== undefined) log(`✔︎ ${propertyKey}`, result);
    return result;
  };
}
