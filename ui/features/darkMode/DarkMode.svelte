<script lang="ts">
  import DarkMode from "./DarkMode.pure.svelte";
  import { darkMode, changeDarkMode } from "./darkMode.model";

  export let className: string = "";
  export { className as class };
</script>

<DarkMode class={className} active={$darkMode} onChange={changeDarkMode} />
