<script lang="ts">
  export let id: string = "";
  export let group: string;
  export let value: string;
  export let disabled: boolean = false;

  export let className: string = "";
  export { className as class };
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="inline-flex select-none {className}">
  <div class="relative flex-shrink-0 w-5 h-5 mt-1 mr-4">
    <input
      {id}
      {disabled}
      {value}
      bind:group
      class="input absolute rounded-full w-full h-full appearance-none radius border-2 border-gray-900 dark:border-gray-200 focus-outline"
      type="radio"
    />
    <div class="dot / w-2 h-2 rounded-full m-1.5 fill-current color-primary-bg" />
  </div>
  <div><slot /></div>
</label>

<style>
  .dot {
    /* padding: 0.25rem; */
    visibility: hidden;
  }
  .input:checked + .dot {
    visibility: visible;
  }
</style>
