<script lang="ts">
import { defineComponent } from 'vue'

import CommitlyLogo from '@components/base/CommitlyLogo.vue'
import AppCopyright from '@components/AppCopyright.vue'
import { GITHUB_AUTH_URL } from '@lib/constants'
import client from '@lib/client'
import { getToken, setToken } from '@lib/token'

export default defineComponent({
  components: { CommitlyLogo },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    buttonLabel() {
      return this.isLoading ? 'Authenticating...' : 'Sign in with GitHub'
    },
  },
  methods: {
    signInWithGithub() {
      window.location.assign(GITHUB_AUTH_URL)
    },
    async getAccesstoken(code: string) {
      this.isLoading = true
      await client.get(`/getAccessToken?code=${code}`).then((res) => {
        const { data } = res

        if (data.access_token) {
          setToken(data.access_token)
          this.$router.push('/')
          this.isLoading = false
        }
      })
    },
  },
  beforeMount() {
    const code = this.$route.query?.code as string
    const token = getToken()

    if (code && !token) {
      this.getAccesstoken(code)
    }
  },
})
</script>

<template>
  <main class="flex bg-white h-screen overflow-hidden">
    <!-- LEFT SIDE ( IMAGE ) -->
    <div
      class="relative w-7/12 bg-[url('/images/galaxy.jpg')] p-10 hidden lg:flex flex-col justify-end bg-cover"
    >
      <div class="relative z-10">
        <h1 class="text-white font-bold text-[64px] leading-tight">
          Browse your <br />
          GitHub Repos
        </h1>
        <p class="text-white/60 text-2xl mt-4">
          The lightweight GitHub browser for developers in a hurry
        </p>
      </div>
    </div>
    <!-- RIGHT SIDE ( LOGIN ) -->
    <div class="p-10 flex flex-col justify-between items-center flex-1">
      <CommitlyLogo />
      <BaseButton
        :disabled="isLoading"
        :isLoading="isLoading"
        @click="signInWithGithub"
        variant="primary"
        :leftIcon="!isLoading ? 'github' : ''"
      >
        {{ buttonLabel }}
      </BaseButton>
      <AppCopyright />
    </div>
  </main>
</template>
