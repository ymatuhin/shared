type Log = {
  (name: string, ...rest: any[]): void;
};

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
