<template>
  <!-- Unocss intellisense doesn't work when usng icons unless you download the icon pack -->
  <!-- https://github.com/unocss/unocss/tree/main/packages/preset-icons -->

  <div class="transition-400 flex h-full select-none text-center">
    <div class="m-auto">
      <!-- svelte-ignore a11y-missing-content -->
      <div class="m-2 mb-5 flex h-max items-center justify-center gap-2 text-2xl">
        <a
          class="i-logos-unocss transition-200 brightness-200% hover:brightness-150% text-inherit"
          href="https://uno.antfu.me/"
          target="_blank"
        />
        <!-- demarcation start -->
        <div class="text-2rem op-30">+</div>
        <!-- demarcation end -->
        <a
          class="i-mdi-vuejs transition-200 op-30 -mb-1.5 -ml-1 text-3xl hover:op-80 text-inherit"
          href="https://vuejs.org"
          target="_blank"
        />
      </div>

      <div class="op-30 fw-300 max-w-40ch mb-2 text-lg">
        Start using the progressive javascript framework with the Instant on-demand Atomic CSS
        engine
      </div>
    </div>
  </div>

  <div class="op-30 fw-300 absolute bottom-5 right-0 left-0 text-center">
    on-demand · instant · fully customizable
  </div>
</template>
