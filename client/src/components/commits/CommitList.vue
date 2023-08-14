<script lang="ts">
import { defineComponent } from 'vue'
import CommitListItem from '../commits/CommitListItem.vue'

export default defineComponent({
  components: { CommitListItem },
  props: { commits: Array },
  data() {
    return {
      page: 1,
    }
  },
  async beforeMount() {
    console.log('PROPS', this.$props.commits)
  },
})
</script>

<template>
  <div class="relative bg-transparent rounded-xl">
    <ul class="flex flex-col">
      <CommitListItem />
    </ul>
  </div>
</template>
