import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import MainPage from './components/pages/MainPage.vue'
import CommunityPage from './components/pages/CommunityPage.vue'

const app = createApp(App)
app
  .component('PageHeader', PageHeader)
  .component('PageFooter', PageFooter)
  .component('MainPage', MainPage)
  .component('CommunityPage', CommunityPage)
app.mount('#app')
