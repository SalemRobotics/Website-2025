<script setup lang="ts">
import { image, titleText, titles } from '@/util/page'
</script>

<template>
  <section id="top_card" class="content-center rounded-md flex items-center justify-center relative">
    <div id="top_card_text"
      class="block items-center content-center justify-center min-w-fit pr-15 hover:cursor-default">
      <h1 id="title"
        class="inline content-center items-center min-w-fit text-2xl sm:text-3xl md:text-5xl text-zinc-200 font-bold">
        {{ titleText }}
      </h1>
      <p id="loc " class="flex justify-center w-full text-sm sm:text-base md:text-xl font-bold text-zinc-200"
        v-if="titleText == titles.mainPage">
        Salem, NH
      </p>
    </div>
    <div id="top_card_image" class="flex content-center items-center justify-center">
      <!-- TODO: Analyze performance impact of this image & using a Ref -->
      <img class="relative rounded-md h-full" :src="image.path" :alt="image.alt" />
    </div>
  </section>
  <br />
</template>

<style scoped>
#top_card {
  background-color: rgb(0, 51, 160);
  height: 27vw;
  width: 100vw;
}

#top_card_text {
  width: 25vw;
  padding-right: 5vw;
}

#top_card_image {
  height: 26vw;
}
</style>
