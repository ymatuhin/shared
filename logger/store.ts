import { Readable } from "svelte/store";

type Log = { (name: string, ...rest: any[]): void };

export const logStore = (name: string, log: Log, store: Readable<any>) =>
  store.subscribe((value) => log("📦 " + name, value));
