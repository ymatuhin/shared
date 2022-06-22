import storageAvailable from "storage-available";
import { logger } from "../logger";

const log = logger("📦 store-lense");

export const storage = (
  key: string,
  type: "localStorage" | "sessionStorage" = "localStorage",
) => {
  const hasStorage = storageAvailable(type);
  type IStorage = { [key: string]: string };
  const storage: IStorage = hasStorage ? window[type] : {};

  if (!hasStorage)
    console.warn(`"${type}" doesn't work, safely fallback to object`);

  return {
    remove: () => {
      log(`× ${key}`);
      delete storage[key];
    },
    set: (value: any) => {
      log(`▶️ ${key}`, value);
      storage[key] = JSON.stringify({ value });
    },
    get: () => {
      try {
        const value = JSON.parse(storage[key] ?? "{}").value;
        log(`◀️ ${key}`, value);
        return value;
      } catch (error) {
        throw new Error(`Can't parse value from "${type}.${key}".`);
      }
    },
  };
};
