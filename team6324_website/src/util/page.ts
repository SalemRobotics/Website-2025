import { ref, shallowRef, type Component } from 'vue'
import MainPage from '../pages/MainPage.vue'
import HistoryPage from '@/pages/HistoryPage.vue'
import SponsorsPage from '@/pages/SponsorsPage.vue'
import ContactUsPage from '@/pages/ContactUsPage.vue'

export const page = shallowRef<Component>(MainPage)

export const imagePaths = {
  mainPage: {
    path: '/good_group.webp',
    alt: 'A group picture of the team',
  },
  communityPage: {
    path: '/exchange_club.webp',
    alt: 'A picture of team members at the Salem Exchange Club',
  },
  historyPage: {
    path: '/Kickoff-2025.PNG',
    alt: 'A picture of team members in the lab for Kick off',
  },
  sponsorsPage: {
    path: '/IMG_6449.JPG',
    alt: 'A picture of the robot sponsor plate',
  },
  contactUsPage: {
    path: '/ATHENSDYNAMIc2.png',
    alt: 'A picture of one of our students shouting "6324"',
  },
}
export const titles = {
  mainPage: "FRC Team 6324",
  communityPage: "Our Community",
  historyPage: "Our History",
  sponsorsPage: "Sponsors",
  contactUsPage: "Contact Us",
}
export const image = ref(imagePaths.mainPage)
export const titleText = ref(titles.mainPage);

export function setPage(newPage: Component, newImage: { path: string, alt: string }, newTitle: string) {
  page.value = newPage
  image.value = newImage;
  titleText.value = newTitle;
}
