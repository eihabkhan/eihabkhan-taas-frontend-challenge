<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'John Doe',
      imageUrl: '/images/profile-placeholder.png',
    }
  },
})
</script>

<template>
  <div class="flex items-center justify-center text-black gap-4">
    <span>{{ name }}</span>
    <img
      v-if="imageUrl"
      class="h-12 w-12 rounded-full"
      :src="imageUrl"
      alt=""
    />
  </div>
</template>
