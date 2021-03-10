<div class="top-space / m-4 sm:mx-6 2xl:mx-4">
  <slot name="top" />
</div>
<div class="flex justify-center m-4 sm:mx-6 2xl:mx-4">
  <div class="vertical-space / hidden 2xl:block flex-1"><slot name="left" /></div>
  <div class="flex-1 max-w-2xl 2xl:mx-4 my-4">
    <slot />
  </div>
  <div class="vertical-space / hidden 2xl:block flex-1"><slot name="right" /></div>
</div>

<style lang="postcss">
  .top-space {
    height: 50px;
  }

  @screen md {
    .top-space {
      height: 90px;
    }
  }

  .vertical-space {
    min-width: 200px;
    max-width: 336px;
  }
</style>
