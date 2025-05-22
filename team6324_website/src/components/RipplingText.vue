<script setup lang="ts">
defineProps(["text"]);
</script>

<template>
  <div class="inline-flex" v-for="c in text">
    <p class="text-red-500">
      {{ c }}
    </p>
  </div>
</template>

<style scoped></style>
