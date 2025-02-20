<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import TeamCard from './components/TeamCard.vue'
import PageFooter from '@/components/PageFooter.vue'
import { page } from '@/util/page'
</script>

<template>
  <div class="display">
    <PageHeader />
    <TeamCard />

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
