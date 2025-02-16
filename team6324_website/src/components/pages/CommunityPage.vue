<script setup lang="ts">
import { setPage } from '../util/page'
import MainPage from './MainPage.vue'
</script>

<template>
  <div class="container">
    <h1 class="warning">Woah there!</h1>

    <br />

    <h1 class="warning">This page is still under construction!</h1>

    <br />
    <br />
    <br />

    <a class="ret_link" href="#" @click.prevent="setPage(MainPage)"
      ><u>Go back to the home page</u></a
    >
  </div>
</template>

<style scoped>
.container {
  display: inline-block;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 150px;
  .warning {
    font-weight: bold;
    font-size: 30px;
    color: yellow;
  }
  .ret_link {
    font-size: 20px;
    color: white;
  }
}
</style>
