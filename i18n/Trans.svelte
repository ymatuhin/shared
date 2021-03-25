<script lang="ts">
  import type { I18n } from "./types";
  import { getContext } from "svelte";
  import { trans } from "./trans";
  import { withCount } from "./withCount";

  // const i18n = getContext<I18n<string>>("i18n");

  export let key: string;
</script>

<!-- 
{#if Object.keys($$restProps).length === 0}
  {trans(i18n, key)}
{:else}
  {withCount(i18n, key, $$restProps)}
{/if} -->
