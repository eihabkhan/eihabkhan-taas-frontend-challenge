<script lang="ts">
import { defineComponent } from 'vue'
import RepoListItem from '@components/repos/RepoListItem.vue'
import { Repo } from '@/types/repo'

export default defineComponent({
  props: {
    repos: Array<Repo>,
  },
  components: { RepoListItem },
})
</script>

<template>
  <!-- h-[600px] overflow-y-scroll  -->
  <div class="relative">
    <EmptyState
      v-if="$props?.repos?.length === 0"
      message="You don't have any repos yet."
    />
    <ul v-else class="flex flex-col">
      <RepoListItem
        v-for="repo in repos"
        :key="repo.id"
        :name="repo.name"
        :stars="repo.stargazers_count"
        :watchers="repo.watchers_count"
        :updatedAt="new Date(repo.updated_at)"
      />
    </ul>
  </div>
</template>
