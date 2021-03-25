import { writable } from "svelte/store";
import { createLogger } from "@ymatuhin/debug";
import { storeLense } from "../../../store-lense";

const log = createLogger("🌙 dark-mode");
const darkLense = storeLense("dark-mode");

export const darkMode = writable<boolean>(getDefaultValue());
log.store("active", darkMode);

export const changeDarkMode = (newValue: boolean) => {
  darkMode.set(newValue);
  darkLense.set(newValue);
};

darkMode.subscribe((value) => {
  const method = value ? "add" : "remove";
  document.documentElement.classList[method]("dark");
});

function getDefaultValue() {
  const preferDarkMode =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  log("prefers dark", preferDarkMode);
  log("saved value", darkLense.get());
  return darkLense.get() ?? preferDarkMode;
}
