<script setup lang="ts">
import { setPage, imagePaths, titles } from '@/util/page'
import MainPage from '@/pages/MainPage.vue'
import CommunityPage from '@/pages/CommunityPage.vue'
import HistoryPage from '@/pages/HistoryPage.vue'
import SponsorsPage from '@/pages/SponsorsPage.vue'
import ContactUsPage from '@/pages/ContactUsPage.vue'
</script>

<template>
  <header id="heading" class="flex items-center rounded-2xl text-white">
    <p id="heading_title"
      class="p-0 pl-7 border-0 bg-none w-fit font-bold hover_blue min-w-fit text-xl sm:text-2xl md:text-4xl py-5"
      @click.prevent="setPage(MainPage, imagePaths.mainPage, titles.mainPage);">
      Salem Robotics
    </p>
    <ul id="heading_links" class="flex h-full list-none">
      <li>
        <button class="page_link text-xs sm:text-sm md:text-base lg:text-xl"
          @click="setPage(CommunityPage, imagePaths.communityPage, titles.communityPage)">
          Community
        </button>
      </li>
      <li>
        <button class="page_link text-xs sm:text-sm md:text-base lg:text-xl"
          @click="setPage(HistoryPage, imagePaths.historyPage, titles.historyPage)">
          History
        </button>
      </li>
      <li>
        <button class="page_link text-xs sm:text-sm md:text-base lg:text-xl"
          @click="setPage(SponsorsPage, imagePaths.sponsorsPage, titles.sponsorsPage)">
          Sponsors
        </button>
      </li>
      <li>
        <button id="last_link" class="page_link text-xs sm:text-sm md:text-base lg:text-xl"
          @click="setPage(ContactUsPag, imagePaths.contactUsPage, titles.contactUsPage)">
          Contact Us
        </button>
      </li>
    </ul>
  </header>
</template>

<style scoped>
@media (width >=40rem) {
  #heading {
    width: 98vw;
  }
}

@media (width < 40rem) {
  #heading {
    width: 100vw;
  }
}

#heading {
  height: 6.5vw;
  min-height: fit-content;
  background-color: rgb(121, 138, 155);
  margin: 0;
  padding: 0;
  margin-top: 1vh;
  margin-bottom: 1vh;

  #heading_title {
    width: 30%;
  }

  #heading_links {
    width: 70%;
    align-items: center;
    justify-content: right;

    .page_link {
      font-weight: 600;
      background: none;
      border: none;
      color: white;
      padding: 0;
      margin: 0;
      margin-left: 3vw;
      height: fit-content;

      transition:
        transform 0.25s ease-in-out,
        color 0.25s ease-in-out;
    }

    .page_link:hover {
      cursor: pointer;
      transform: scale(1.05);
      color: rgba(0, 51, 160, 0.5);
    }

    #last_link {
      margin-right: 2.5vw;
    }
  }
}

.hover_blue {
  transition: color 0.2s ease-in-out;
}

.hover_blue:hover {
  cursor: pointer;
  color: rgba(0, 51, 160, 0.5);
}
</style>
