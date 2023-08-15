import { createRouter, createWebHistory } from 'vue-router'

import Login from '@views/Login.vue'
import Home from '@views/Home.vue'
import Repo from '@views/Repo.vue'
import { getToken } from '@lib/token'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/:repoId',
      name: 'Repo',
      component: Repo,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

router.beforeEach((to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = getToken()
    if (token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else if (to.matched.some((record) => record.meta.hideForAuth)) {
    const token = getToken()
    if (token) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
