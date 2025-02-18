import { ref, type Component } from 'vue'
import MainPage from '../pages/MainPage.vue'

export const page = ref<Component>(MainPage)
export function setPage(newPage: Component) {
  page.value = newPage
}
