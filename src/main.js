import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { worker } from './mocks/browser'

import App from './App.vue'
import router from './router'
import '@/composable/useValidate'
import { i18n } from '@/composable/useLocale'

import 'uno.css'
import './assets/main.css'

// Import the functions you need from the SDKs you need

// import { worker } from './mocks/browser'
worker.start({
  onUnhandledRequest: 'bypass',
})
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6_pc-pefNPkQyjHNVhqvD9GYNjjI5jAk',
  authDomain: 'ga4-demo-0000.firebaseapp.com',
  projectId: 'ga4-demo-0000',
  storageBucket: 'ga4-demo-0000.appspot.com',
  messagingSenderId: '1015516496814',
  appId: '1:1015516496814:web:77a25430ba9dc3f4923e3f',
  measurementId: 'G-15S6SPBZ25',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
