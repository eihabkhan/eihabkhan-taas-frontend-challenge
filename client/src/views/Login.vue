<script lang="ts">
import { defineComponent } from 'vue'
import CommitlyLogo from '../components/base/CommitlyLogo.vue'
import AppCopyright from '../components/AppCopyright.vue'
export default defineComponent({
  components: { CommitlyLogo },
  methods: {
    signInWithGithub() {},
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
      <BaseButton @click="signInWithGithub" variant="primary">
        Sign in with GitHub
      </BaseButton>
      <AppCopyright />
    </div>
  </main>
</template>
