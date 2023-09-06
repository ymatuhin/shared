import storageAvailable from "storage-available";

type Params = {
  type?: "localStorage" | "sessionStorage";
  debug?: Function;
  version?: string | number;
};

/* EXAMPLE
 * const nameStorage = createStorage("my-name");
 * nameStorage.set("Yury");
 * const name = nameStorage.get()
 * nameStorage.remove();
 */

export type Storage<T> = ReturnType<typeof createStorage<T>>;
export function createStorage<T>(
  key: string,
  { type = "localStorage", debug, version = "" }: Params = {}
) {
  const hasStorage = storageAvailable(type);
  type IStorage = { [key: string]: string };
  const storage: IStorage = hasStorage ? window[type] : {};

  if (!hasStorage) {
    console.warn(`"${type}" doesn't work, safely fallback to object`);
  }

  return {
    has() {
      return storage[key + version] !== undefined;
    },
    set(value: T) {
      debug?.(`▶️ storage:${key}`, value);
      storage[key + version] = JSON.stringify([value]);
      return value;
    },
    get(): T {
      try {
        const value = JSON.parse(storage[key + version] ?? "[]")[0];
        debug?.(`◀️ storage:${key}`, value);
        return value;
      } catch (error) {
        throw new Error(`Can't parse value from "${type}.${key}${version}"`);
      }
    },
    clear() {
      debug?.(`× storage:${key}`);
      delete storage[key + version];
    },
  };
}
