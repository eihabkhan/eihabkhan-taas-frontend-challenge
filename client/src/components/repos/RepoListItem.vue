<script lang="ts">
import { defineComponent } from 'vue'

import StarIcon from '../icons/star.svg'
import WatcherIcon from '../icons/watcher.svg'
import BaseButton from '../base/BaseButton.vue'

export default defineComponent({
  props: {
    name: { type: String, default: 'repo-name' },
    stars: { type: Number, default: 0 },
    watchers: { type: Number, default: 0 },
    updatedAt: Date,
  },
  components: { StarIcon, WatcherIcon, BaseButton },
})
</script>

<template>
  <li>
    <BaseButton
      variant="tertiary"
      as="a"
      :href="'/' + name"
      class="min-h-[120px] w-full flex justify-between items-center first-of-type:border-b-[1px] border-black/10 border-b p-4 hover:bg-gray-100 rounded-none"
    >
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <p class="font-bold text-xl">{{ name }}</p>
        </div>
        <div class="inline-flex w-fit items-center justify-center gap-2">
          <span class="text-xs text-gray-400"
            >Last active: {{ updatedAt }}</span
          >
        </div>
      </div>
      <div class="flex items-center gap-10">
        <div class="flex gap-2 items-center">
          <StarIcon />
          <span>{{ stars }}</span>
        </div>
        <div class="flex gap-2 items-center">
          <WatcherIcon />
          <span>{{ watchers }}</span>
        </div>
      </div>
    </BaseButton>
  </li>
</template>
