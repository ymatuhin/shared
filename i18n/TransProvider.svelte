<script lang="ts">
  import { setContext } from "svelte";

  export let i18n;

  setContext("i18n", i18n);
</script>

<slot />
