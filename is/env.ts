export const isBrowser = typeof window === "object";
export const isNotBrowser = !isBrowser;
export const isClient = isBrowser;
export const isNotClient = isNotBrowser;

export const isServer = typeof window !== "object";
export const isNotServer = !isServer;
export const isNode = isServer;
export const isNotNode = isNotServer;

export const isProd = process.env.NODE_ENV === "production";
export const isNotProd = !isProd;
export const isDev = process.env.NODE_ENV === "development";
export const isNotDev = !isDev;
