<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@components/base/BaseButton.vue'
import SVGIcon from '@components/base/SVGIcon.vue'

export default defineComponent({
  props: {
    name: { type: String, default: 'repo-name' },
    stars: { type: Number, default: 0 },
    watchers: { type: Number, default: 0 },
    updatedAt: Date,
  },
  components: { BaseButton, SVGIcon },
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
            >Last active: {{ updatedAt?.toLocaleDateString('en-uk') }}</span
          >
        </div>
      </div>
      <div class="flex items-center gap-10">
        <div class="flex gap-2 items-center">
          <SVGIcon name="star" />
          <span>{{ stars }}</span>
        </div>
        <div class="hidden sm:flex gap-2 items-center">
          <SVGIcon name="watcher" />
          <span>{{ watchers }}</span>
        </div>
      </div>
    </BaseButton>
  </li>
</template>
