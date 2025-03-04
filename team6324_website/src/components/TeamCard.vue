<script setup lang="ts">
import { image } from '@/util/page'
</script>

<template>
  <section
    id="top_card"
    class="content-center rounded-md block sm:flex items-center justify-center relative"
  >
    <div
      id="top_card_text"
      class="block items-center content-center justify-center w-full sm:w-fit min-w-fit py-2.5 sm:py-0 sm:pr-15 hover:cursor-default"
    >
      <h1
        id="title"
        class="content-center items-center w-full min-w-fit text-3xl sm:text-3xl md:text-5xl text-zinc-200 font-bold justify-center text-center"
      >
        FRC Team 6324
      </h1>
      <p
        id="loc"
        class="flex justify-center w-full text-sm sm:text-base md:text-xl font-bold text-zinc-200"
      >
        Salem, NH
      </p>
    </div>
    <div id="top_card_image" class="flex content-center items-center justify-center">
      <!-- TODO: Analyze performance impact of this image & using a Ref -->
      <img v-cloak id="image" class="rounded-md h-full" :src="image.path" :alt="image.alt" />
    </div>
  </section>
</template>

<style scoped>
#top_card {
  background-color: rgb(0, 51, 160);
  height: 27vw;
  min-height: fit-content;
  width: 100vw;
}

@media (width < 40rem) {
  #title {
    width: 100vw;
  }
}

@media (width >= 40rem) {
  #top_card_image {
    height: 26vw;
  }
}
@media (width < 40rem) {
  #top_card_image {
    width: 100vw;
    height: fit-content;
    padding-bottom: 1vw;

    #image {
      width: 98.5vw;
    }
  }
}
</style>
