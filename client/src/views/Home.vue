<script lang="ts">
import { defineComponent } from 'vue'
import RepoList from '@components/repos/RepoList.vue'
import { getRepos } from '@services/repo'
import RepoSearchBar from '@components/repos/RepoSearchBar.vue'
import { Repo } from '@/types/repo'

export default defineComponent({
  components: {
    RepoList,
    RepoSearchBar,
  },
  data() {
    return {
      repos: [] as Repo[],
      page: 1,
      reachedEnd: false,
      isLoading: true,
      searchQuery: '',
    }
  },
  computed: {
    userHasNoRepos() {
      return (
        (this.isLoading && !this.reachedEnd) ||
        (!this.isLoading && this.repos.length != 0)
      )
    },
  },
  async created() {
    const { data } = await getRepos()
    this.repos = data
    this.isLoading = false
  },
  mounted() {
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight

      if (bottomOfWindow) {
        this.page = this.page + 1
      }
    }
  },
  watch: {
    async page(value) {
      if (!this.reachedEnd) {
        const { data } = await getRepos(value)
        if (data.length > 0) {
          this.isLoading = false
          this.repos = this.repos.concat(data)
        } else {
          this.reachedEnd = true
        }
      }
    },
  },
})
</script>

<template>
  <div class="overflow-hidden">
    <main class="container min-h-[calc(100vh-282px)] max-w-[1024px]">
      <div
        class="relative mt-24 flex flex-col sm:flex-row sm:items-center items-starts justify-between gap-6"
      >
        <h1 class="text-black font-bold text-3xl">My Repositories</h1>

        <RepoSearchBar :repos="repos" />
      </div>
      <section
        class="mt-8 bg-white border-[1px] border-black/10 p-4 pb-0 rounded-xl"
      >
        <RepoList :repos="repos" v-if="!isLoading" />
        <div class="block my-10 text-center text-gray-400">
          <span v-if="reachedEnd" class="">You've reached the end 🚶‍♂️</span>
          <span v-else-if="userHasNoRepos">Loading...</span>
        </div>
      </section>
    </main>
  </div>
</template>
@/services/repo
