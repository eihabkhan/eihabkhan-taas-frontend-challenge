<script lang="ts">
import { defineComponent } from 'vue'
import { getUserData } from '../../services/User'

export default defineComponent({
  data() {
    return {
      name: '',
      imageUrl: '',
    }
  },
  async beforeMount() {
    const { data } = await getUserData()
    const { name, avatar_url } = data

    this.name = name
    this.imageUrl = avatar_url
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
