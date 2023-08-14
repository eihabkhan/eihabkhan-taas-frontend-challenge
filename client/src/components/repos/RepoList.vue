<script lang="ts">
import { defineComponent } from 'vue'
import RepoListItem from '../repos/RepoListItem.vue'

export default defineComponent({
  props: {
    repos: Array,
  },
  components: { RepoListItem },
})
</script>

<template>
  <!-- h-[600px] overflow-y-scroll  -->
  <div class="relative">
    <ul class="flex flex-col">
      <RepoListItem />
    </ul>
  </div>
</template>
