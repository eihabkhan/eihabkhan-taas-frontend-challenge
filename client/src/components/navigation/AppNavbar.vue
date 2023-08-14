<script lang="ts">
import CommitlyLogo from '../base/CommitlyLogo.vue'
import UserProfile from '../profile/UserProfile.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { CommitlyLogo, UserProfile },
  props: {
    name: String,
    imageUrl: {
      type: String,
      default: '/images/profile-placeholder.png',
    },
  },
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
