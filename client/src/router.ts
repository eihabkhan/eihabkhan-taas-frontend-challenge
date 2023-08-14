import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Repo from './views/Repo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:repoId',
      name: 'Repo',
      component: Repo,
    },
  ],
})

export default router
