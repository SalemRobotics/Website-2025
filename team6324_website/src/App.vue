<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import TeamCard from './components/TeamCard.vue'
import PageFooter from '@/components/PageFooter.vue'
import { page } from '@/util/page'
</script>

<template>
  <div class="display w-full justify-center items-center">
    <PageHeader />

    <main class="w-full">
      <TeamCard />

      <component :is="page"></component>
    </main>

    <PageFooter />
  </div>
</template>
