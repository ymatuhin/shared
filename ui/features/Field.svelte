<script lang="ts">
  export let value: string;

  const handleInput = (event) => {
    value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  };
</script>

<input
  {value}
  {...$$restProps}
  on:input={handleInput}
  on:change={handleInput}
  class="{$$props.class} p-1 px-2 box-content h-5 appearance-none border-2 bg-transparent border-gray-900 dark:border-gray-200 focus-outline color-text"
/>
