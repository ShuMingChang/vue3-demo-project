import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { worker } from './mocks/browser'

import App from './App.vue'
import router from './router'
import '@/composable/useValidate'
import { i18n } from '@/composable/useLocale'

import 'uno.css'
import './assets/main.css'

// import { worker } from './mocks/browser'
worker.start({
  onUnhandledRequest: 'bypass',
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
