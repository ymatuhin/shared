<script lang="ts">
  import type { ApiStore } from "../../api";
  // import ArrowRightFill from "./icons/ArrowRightFill.svelte";
  import ErrorAlert from "./ErrorAlert.svelte";
  import TextButton from "./TextButton.svelte";

  export let apiStore: ApiStore;

  const errorTitles = {
    network: "Network error",
    server: "Server error",
  };
  const errorMessages = {
    network: "Something went",
    server: "Something went wrong on our server",
  };
</script>

{#if $apiStore.status === "error"}
  <ErrorAlert
    type="error"
    title={$apiStore.error?.code || errorTitles[$apiStore.error?.type]}
    message={errorMessages[$apiStore.error?.type]}
    notes={$apiStore.error?.data?.message}
    {...$$restProps}
  >
    <TextButton class="mt-2" on:click={apiStore.retry}>Try again</TextButton>
  </ErrorAlert>
{/if}
