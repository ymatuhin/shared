import type { Writable } from "svelte/store";

import flatry from "flatry";
import { writable } from "svelte/store";

type BaseParams = { baseUrl: string; fetch?: RequestInit };
type Status = "initial" | "pending" | "success" | "error";
type Error = {
  type: string;
  code?: number;
  data?: any;
};
type Store<Data> = {
  status: Status;
  data: Data | null;
  error: Error | null;
};

export type ApiStore<Data = any> = Writable<Store<Data>> & {
  request(data: any): void;
  retry(): void;
  abort: AbortController["abort"];
};

export const createApi = (baseParams: BaseParams) => {
  return {
    get: makeMethod("GET", baseParams),
    post: makeMethod("POST", baseParams),
    put: makeMethod("PUT", baseParams),
    patch: makeMethod("PATCH", baseParams),
    delete: makeMethod("DELETE", baseParams),
    options: makeMethod("OPTIONS", baseParams),
  };
};

function makeMethod(method: string, baseParams: BaseParams) {
  const { signal, abort } = new AbortController();

  return <Data>(url: string, methodFetchParams?: RequestInit): ApiStore<Data> => {
    const finalUrl = url.indexOf("http") === 0 ? url : baseParams.baseUrl + url;
    const fetchParams = { ...baseParams.fetch, ...methodFetchParams };
    let lastData;

    const $store = writable<Store<Data>>({
      status: "initial",
      data: null,
      error: null,
    });

    async function request(data?: Object) {
      console.info(`# [data]`, data);
      lastData = data;
      $store.update((state) => ({ ...state, status: "pending" }));
      const params = {
        ...fetchParams,
        signal,
        method,
        headers: {
          ...fetchParams.headers,
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
      };

      let json;
      let parseError;
      const [fetchError, response] = await flatry(fetch(finalUrl, params));
      if (response) [parseError, json] = await flatry(response.json());

      const isError = fetchError || parseError || !response?.ok;
      const error = {
        type: fetchError ? "network" : "server",
        code: response?.status,
        data: json,
      };

      $store.update((state) => ({
        ...state,
        error: isError ? error : null,
        data: isError ? null : json,
        status: isError ? "error" : "success",
      }));
    }

    return {
      ...$store,
      request,
      abort,
      retry: () => request(lastData),
    };
  };
}
