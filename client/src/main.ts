import { createApp } from 'vue'
import Popper from 'vue3-popper'
import VueCookies from 'vue-cookies'

import './style.css'

import App from './App.vue'
import router from './router'

import BaseButton from './components/base/BaseButton.vue'
import AppCopyright from './components/AppCopyright.vue'

createApp(App)
  .use(router)
  .component('BaseButton', BaseButton)
  .component('AppCopyright', AppCopyright)
  .component('Popper', Popper)
  .mount('#app')
