<script lang="ts">
import { defineComponent } from 'vue'
import CommitListItem from '@components/commits/CommitListItem.vue'
import { Commit } from '@/types/repo'

export default defineComponent({
  components: { CommitListItem },
  props: { commits: Array<Commit> },
  data() {
    return {
      page: 1,
    }
  },
})
</script>

<template>
  <div class="relative bg-transparent rounded-xl">
    <EmptyState
      v-if="$props?.commits?.length === 0"
      message="You don't have any repos yet."
    />
    <ul v-else class="flex flex-col">
      <CommitListItem
        v-for="commit in commits"
        :key="commit.sha"
        :message="commit.commit.message"
        :sha="commit.sha.slice(0, 7)"
        :date="new Date(commit.commit.author.date)"
      />
    </ul>
  </div>
</template>
