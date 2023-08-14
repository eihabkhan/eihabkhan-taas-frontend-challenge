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
      <RepoListItem
        v-for="repo in repos"
        :key="repo.id"
        :name="repo.name"
        :stars="repo.stargazers_count"
        :watchers="repo.watchers_count"
        :updatedAt="
          new Date(repo.updated_at).toLocaleDateString('en-uk', {
            dateStyle: 'long',
          })
        "
      />
    </ul>
  </div>
</template>
