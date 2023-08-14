import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import router from './router'

import BaseButton from './components/base/BaseButton.vue'
import AppCopyright from './components/AppCopyright.vue'

createApp(App)
  .use(router)
  .component('BaseButton', BaseButton)
  .component('AppCopyright', AppCopyright)
  .mount('#app')
