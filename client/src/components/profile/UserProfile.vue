<script lang="ts">
import { defineComponent } from 'vue'
import { getUserData } from '../../services/User'
import { removeToken } from '../../lib/token'

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
  methods: {
    signOut() {
      removeToken()
      this.$router.replace('/login')
    },
  },
})
</script>

<template>
  <div class="flex items-center justify-center text-black gap-4">
    <div class="flex flex-col">
      <span>{{ name }}</span>
      <BaseButton
        @click="signOut"
        variant="tertiary"
        class="justify-start text-xs text-gray-400 hover:text-black"
      >
        Log out
      </BaseButton>
    </div>
    <img
      v-if="imageUrl"
      class="h-12 w-12 rounded-full"
      :src="imageUrl"
      alt=""
    />
  </div>
</template>
