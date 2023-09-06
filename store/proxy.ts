type Listener<T> = (value: T) => void;

export type Store<T extends Object> = T & {
  subscribe: (fn: Listener<T>) => () => void;
};

export function createStore<T extends Object>(object: T) {
  let inProgress = false;
  const subscribers = new Set<Listener<T>>();

  const delayedNotify = () => {
    if (inProgress) return;
    inProgress = true;
    requestAnimationFrame(notify);
  };

  const notify = () => {
    subscribers.forEach((subscriber) => subscriber(object));
    inProgress = false;
  };

  const handler = {
    get(target: any, propertyKey: PropertyKey) {
      const proxyKey = "__is_proxy__";
      if (propertyKey === proxyKey) return true;
      const prop = Reflect.get(target, propertyKey);

      if (
        ((typeof prop === "object" && prop !== null) || Array.isArray(prop)) &&
        !prop[proxyKey]
      ) {
        Reflect.set(target, propertyKey, new Proxy(prop, handler));
      }

      return Reflect.get(target, propertyKey);
    },
    deleteProperty(target: any, propertyKey: PropertyKey) {
      if (subscribers.size) delayedNotify();
      return Reflect.deleteProperty(target, propertyKey);
    },
    set(target: any, propertyKey: PropertyKey, value: any) {
      if (subscribers.size) delayedNotify();
      return Reflect.set(target, propertyKey, value);
    },
  };

  const proxy = new Proxy(object, handler);

  // if (typeof proxy.subscribe === "function") {
  //   console.info(`🔥 proxy.subscribe (proxy.ts)`);
  //   proxy.subscribe(notify);
  // } else {
  Object.defineProperty(proxy, "subscribe", {
    enumerable: false,
    configurable: false,
    writable: false,
    value(callback: Listener<T>) {
      callback(proxy);
      subscribers.add(callback);

      return () => subscribers.delete(callback);
    },
  });
  // }

  return new Proxy(object, handler) as Store<T>;
}
