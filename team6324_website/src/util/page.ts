import { ref, shallowRef, type Component } from 'vue'
import MainPage from '../pages/MainPage.vue'

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
}
export const image = ref(imagePaths.mainPage)

export function setPage(newPage: Component) {
  page.value = newPage
}
