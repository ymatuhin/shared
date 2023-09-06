// * just for history

// export * from "svelte/store";
// import * as SS from "svelte/store";

// export interface Writable<T> extends SS.Writable<T> {
//   on<V extends any[]>(
//     action: Action<V>,
//     handler: (storeValue: T, ...rest: V) => T
//   ): void;
// }

// export const writable = <T>(...params: Parameters<typeof SS.writable<T>>) => {
//   const store = SS.writable(...params) as Writable<T>;

//   store.on = (action, handler) =>
//     action.subscribe((...values) => {
//       store.set(handler(SS.get(store), ...(values as any)));
//     });

//   return store;
// };

// type Listener<V extends any[]> = (...rest: V) => void;
// type Action<V extends any[]> = {
//   (...args: V): void;
//   subscribe(listener: Listener<any>): void;
//   unsubscribe(listener: Listener<V>): void;
// };

// export const action = <V extends any[]>(): Action<V> => {
//   const listeners = new Set<Listener<V>>();

//   function caller(...args: V[]) {
//     listeners.forEach((listener) => listener(...args));
//   }

//   caller.subscribe = (listener: Listener<V>) => {
//     listeners.add(listener);
//   };
//   caller.unsubscribe = (listener: Listener<V>) => {
//     listeners.delete(listener);
//   };

//   return caller;
// };

// const board = writable("red");
// const save = action<[number, string]>();
// const restore = action();

// board.on(save, (store, number, value3) => {
//   console.info(`🔥 store (svelte.ts)`, store + number * 2);
//   return "1213";
// });

// board.on(restore, (store) => {
//   console.info(`🔥 store (svelte.ts)`, store);
//   return "1213";
// });

// save.subscribe((numb, str) => {
//   console.info(`🔥 value (svelte.ts)`, numb, str);
// });
