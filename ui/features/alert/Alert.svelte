<script lang="ts">
  export let title: string = "";
  export let message: string = "";
  export let notes: string = "";

  export let classIcon = "";
  export let classTitle = "";
</script>

<div class="flex w-full overflow-hidden bg-white shadow-md dark:bg-gray-800 {$$props.class}">
  {#if $$slots.icon}
    <div class="flex items-center justify-center w-12 text-white {classIcon}">
      <slot name="icon" />
    </div>
  {:else}
    <div class="w-2 bg-gray-700" />
  {/if}

  <div class="px-4 py-2 flex w-full items-center">
    <div>
      {#if title}
        <p class="font-semibold {classTitle}">{title}</p>
      {/if}
      {#if message}
        <p class="text-sm ">{message}</p>
      {/if}
      {#if notes}
        <p class="typo-caption">{notes}</p>
      {/if}
      <slot />
    </div>
  </div>
</div>
