<script lang="ts">
  import type { I18n } from "./types";
  import { setContext } from "svelte";

  export let i18n: I18n<string>;

  setContext("i18n", i18n);
</script>

<slot />
