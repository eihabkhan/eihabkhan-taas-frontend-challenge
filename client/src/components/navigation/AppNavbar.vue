<script lang="ts">
import { defineComponent } from 'vue'
import CommitlyLogo from '@components/base/CommitlyLogo.vue'
import UserProfile from '@components/profile/UserProfile.vue'

export default defineComponent({
  components: { CommitlyLogo, UserProfile },
})
</script>

<template>
  <header class="mt-10 w-full container max-w-[1024px]">
    <div class="flex justify-between items-center">
      <CommitlyLogo />
      <UserProfile />
    </div>
  </header>
</template>
