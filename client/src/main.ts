import { createApp } from 'vue'
import Popper from 'vue3-popper'

import '@/style.css'

import App from '@/App.vue'
import router from '@/router'

import BaseButton from '@/components/base/BaseButton.vue'
import AppCopyright from '@/components/AppCopyright.vue'
import SVGIconVue from '@/components/base/SVGIcon.vue'
import EmptyState from '@/components/EmptyState.vue'

createApp(App)
  .use(router)
  .component('BaseButton', BaseButton)
  .component('SVGIcon', SVGIconVue)
  .component('EmptyState', EmptyState)
  .component('AppCopyright', AppCopyright)
  .component('Popper', Popper)
  .mount('#app')
