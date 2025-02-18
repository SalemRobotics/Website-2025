<script setup lang="ts">
import PageFooter from './components/PageFooter.vue'
import PageHeader from './components/PageHeader.vue'
import { page } from './components/util/page'
</script>

<template>
  <div class="display">
    <PageHeader />

    <component :is="page"></component>

    <PageFooter />
  </div>
</template>

<style scoped>
.display {
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
}
</style>
