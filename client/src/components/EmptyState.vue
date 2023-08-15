<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: { type: String, default: 'Wow, so empty!' },
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center px-4 py-20">
    <SVGIcon name="bunny" />
    <p class="text-gray-400">{{ $props.message }}</p>
  </div>
</template>
