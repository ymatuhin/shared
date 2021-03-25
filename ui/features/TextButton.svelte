<script lang="ts">
  export let buttonType: "button" | "submit" = "button";
</script>

<button type={buttonType} on:click class="inline-flex font-medium text-sm {$$props.class}">
  <slot />
</button>
