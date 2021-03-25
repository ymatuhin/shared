<script lang="ts">
  export let title: string;
  export let message: string;
  export let notes: string;
  export let color: string = "gray";
</script>

<div
  on:click
  class="relative bg-{color}-100 dark:bg-{color}-400 text-{color}-900 w-full {$$props.class}"
>
  <div class="px-3 py-3 flex">
    {#if $$slots.icon}
      <div class="w-6 h-6 flex-shrink-0 mr-3">
        <slot name="icon" />
      </div>
    {/if}

    <div class="flex-1 ">
      {#if title}
        <p class="font-medium leading-tight">{title}</p>
      {/if}
      {#if message}
        <p class="text-sm text-ospanacity-80">{message}</p>
      {/if}

      {#if notes}
        <p class="text-xs text-opacity-80">{notes}</p>
      {/if}

      <div class="ml-auto">
        <slot />
      </div>
    </div>
  </div>
</div>
