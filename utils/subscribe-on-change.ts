export function subscribeOnChange(
  store: { subscribe: (value: any) => any },
  fn: (value: any) => void
) {
  let firedFirst = false;
  return store.subscribe((state) => {
    if (!firedFirst) firedFirst = true;
    else fn(state);
  });
}
