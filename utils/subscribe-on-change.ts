import type { Readable, Subscriber } from "svelte/store";

export function subscribeOnChange<T>(store: Readable<T>, fn: Subscriber<T>) {
  let firedFirst = false;
  return store.subscribe((state) => {
    if (!firedFirst) firedFirst = true;
    else fn(state);
  });
}
