import { useEffect, useState } from "preact/hooks";
import { get, Readable, Writable } from "svelte/store";

export const useStore = <S>($store: Readable<S> | Writable<S>) => {
  const [value, setValue] = useState(get($store));
  useEffect(() => $store.subscribe(setValue), []);
  // @ts-ignore
  return [value, $store.set];
};
