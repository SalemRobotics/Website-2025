import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import MainPage from './pages/MainPage.vue'
import TeamCard from './components/TeamCard.vue'

const app = createApp(App)
app
  .component('PageHeader', PageHeader)
  .component('TeamCard', TeamCard)
  .component('PageFooter', PageFooter)
  .component('MainPage', MainPage)

app.config.warnHandler = (warn, inst, trace) => {
  console.warn(`A warning has occurred with ${inst}: ${warn} \n\tTrace: ${trace}`)
}
app.config.errorHandler = (err, inst, info) => {
  console.error(`An error has occurred with ${inst}: ${err} \n\tInfo: ${info}`)
}

app.mount('#app')
