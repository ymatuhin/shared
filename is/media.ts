import { isBrowser } from "./env";

export const isMediaDark = () => {
  if (!isBrowser) return null;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  return media?.matches;
};

export const isMediaLight = () => {
  if (!isBrowser) return null;
  const media = window.matchMedia("(prefers-color-scheme: light)");
  return media?.matches;
};
