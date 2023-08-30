import storageAvailable from "storage-available";

type Params = {
  type?: "localStorage" | "sessionStorage";
  logger?: Function;
};

/* EXAMPLE
 * const nameStorage = createStorage("my-name");
 * nameStorage.set("Yury");
 * const name = nameStorage.get()
 * nameStorage.remove();
 */

export function createStorage<T>(
  key: string,
  { type = "localStorage", logger }: Params = {}
) {
  const hasStorage = storageAvailable(type);
  type IStorage = { [key: string]: string };
  const storage: IStorage = hasStorage ? window[type] : {};

  if (!hasStorage) {
    console.warn(`"${type}" doesn't work, safely fallback to object`);
  }

  return {
    remove: () => {
      logger?.(`× ${key}`);
      delete storage[key];
    },
    set: (value: T) => {
      logger?.(`▶️ ${key}`, value);
      storage[key] = JSON.stringify([value]);
    },
    get: (): T => {
      try {
        const value = JSON.parse(storage[key] ?? "[]")[0];
        logger?.(`◀️ ${key}`, value);
        return value;
      } catch (error) {
        throw new Error(`Can't parse value from "${type}.${key}".`);
      }
    },
  };
}
