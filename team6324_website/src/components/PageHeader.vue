<script setup lang="ts">
import { setPage } from './util/page'
import MainPage from './pages/MainPage.vue'
import CommunityPage from './pages/CommunityPage.vue'
</script>

<template>
  <header class="heading">
    <h1>
      <a class="title" href="#" @click.prevent="setPage(MainPage)">Salem Robotics</a>
    </h1>
    <div class="links">
      <!-- href="#" redirects to the top of the current page, and @click.prevent="..." changes the tab -->
      <a href="#" @click.prevent="setPage(CommunityPage)"><h3 class="page_link">Community</h3></a>
      <!-- TODO: add more links -->
      <h3 class="page_link">News</h3>
      <h3 class="page_link">History</h3>
      <h3 class="page_link">Sponsors</h3>
      <h3 class="page_link" style="padding-right: 30px">Contact Us</h3>
    </div>
  </header>
</template>

<style scoped>
.heading {
  display: flex;
  width: 98%;
  height: 100px;
  align-items: center;
  background-color: rgb(121 138 155);
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: white;

  h1 .title {
    padding: 0;
    padding-left: 30px;
    border: none;
    background: none;
    width: 30%;
    color: white;
    font-weight: bold;
  }
  .links {
    width: 70%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: right;
    .page_link {
      font-weight: bold;
      padding-left: 30px;
      color: white;
    }
  }
}
</style>
