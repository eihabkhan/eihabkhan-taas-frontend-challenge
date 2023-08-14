<script lang="ts">
import CommitlyLogo from '../base/CommitlyLogo.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    CommitlyLogo,
  },
})
</script>

<template>
  <header class="mt-10 w-full container max-w-[1024px]">
    <div class="flex justify-between items-center">
      <CommitlyLogo />
    </div>
  </header>
</template>
