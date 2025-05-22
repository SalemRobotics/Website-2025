<script setup lang="ts">
defineProps(["toScroll"]);
</script>

<template>
  <section id="scroll" class="w-full flex" aria-hidden="true">
    <div id="marquee-container" ref="containerRef">
      <hr class="w-full mb-[2.5vh]" />
      <div id="marquee-track" class="font-thin text-3xl">
        <div class="marquee-content" v-for="_ in 2">
          <span class="text-blue-500">Put something here</span>
          <span>—</span>
          <span class="text-orange-500">Put something here</span>
          <span>—</span>
          <span class="text-purple-500">Put something here</span>
          <span>—</span>
          <span class="text-red-500">Put something here</span>
          <span>—</span>
          <span class="text-green-500">Put something here</span>
          <span>—</span>
          <span class="text-yellow-500">Put something here</span>
          <span>—</span>
        </div>
      </div>
      <hr class="w-full" />
    </div>
  </section>
</template>

<style scoped>
#marquee-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  white-space: nowrap;
  height: fit-content;
  margin-top: 3vh;
  font-family: "Devil Bauer", sans-serif;
}

#marquee-track {
  display: flex;
  width: max-content;
  margin-bottom: 2.5vh;
  /* WARNING: Changing the duration requires that you should look at the animation play for at least twice the duration
    - if it jumps, please revert it to 15s or what was there previously */
  animation: marquee-scroll 60s linear infinite;
  @media (width >= 40rem) {
    animation: marquee-scroll 37.5s linear infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    /* TODO: Figure out how to make this look good even without animation. The current idea is to have it kind of in the
        middle of the scroll, so part of a text is visible on both sides but there is no scroll. */
    animation: none;
  }
  position: relative;

  .marquee-content {
    display: flex;
    flex-shrink: 0;

    span {
      display: inline-block;
      padding-inline: 1rem;
      white-space: nowrap;
    }
  }
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
