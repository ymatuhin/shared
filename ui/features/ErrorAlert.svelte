<script lang="ts">
  import Alert from "./Alert.svelte";
  import ExclamationCircleFill from "./icons/ExclamationCircleFill.svelte";

  // import ExclamationFill from "../icons/ExclamationFill.svelte";
  // import InformationCircleFill from "../icons/InformationCircleFill.svelte";
  // import CheckCircleFill from "../icons/CheckCircleFill.svelte";
</script>

<Alert color="red" {...$$props}>
  <ExclamationCircleFill slot="icon" />
  <slot />
</Alert>
