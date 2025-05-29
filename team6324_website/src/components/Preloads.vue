<script setup lang="ts">
import { PreloadFile } from "@/preload.js";

defineProps({
  files: {
    type: Array<PreloadFile>,
    required: true,
  },
});
</script>

<template>
  <link
    v-for="file in files"
    :rel="file.onPageLoad() ? 'preload' : 'prefetch'"
    :href="file.name()"
    :type="file.type()"
    as="image"
    crossorigin="anonymous"
  />
</template>

<style scoped></style>
