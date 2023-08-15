<script lang="ts">
import { defineComponent } from 'vue'
import CommitList from '@components/commits/CommitList.vue'
import { getRepoBranches, getRepoCommits } from '@services/repo'
import { getUserData } from '@services/user'

export default defineComponent({
  components: { CommitList },
  data() {
    return {
      username: '',
      branch: '',
      branches: [],
      commits: [],
      reachedEnd: false,
      page: 1,
      repo: this.$route.params.repoId as string,
    }
  },
  methods: {
    async getUserInfo() {
      const { data: user } = await getUserData()
      const username = user.login
      this.username = username
    },
    async getBranchCommits(
      branch: string,
      username: string,
      repoId: string,
      page: number
    ) {
      const { data: commits } = await getRepoCommits(
        page,
        username,
        repoId,
        branch
      )

      console.log('CMTS', commits)

      return commits
    },
  },
  watch: {
    async branch() {
      this.reachedEnd = false
      this.page = 1
      this.commits = []
      this.commits = await this.getBranchCommits(
        this.branch,
        this.username,
        this.repo,
        this.page
      )
    },
    async page() {
      if (!this.reachedEnd) {
        const data = await this.getBranchCommits(
          this.branch,
          this.username,
          this.repo,
          this.page
        )
        console.log('Data', data)

        if (data.length > 0) {
          this.commits = this.commits.concat(data)
        } else {
          this.reachedEnd = true
        }
      }
    },
  },
  async created() {
    await this.getUserInfo()

    const { data: branches } = await getRepoBranches(
      1,
      this.username,
      this.repo
    )

    this.branches = branches
    this.branch = branches[0].commit.sha
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
})
</script>

<template>
  <div class="min-h-screen overflow-hidden">
    <main class="container min-h-[calc(100vh-282px)] max-w-[1024px]">
      <div class="mt-24 flex items-center justify-between">
        <div class="flex flex-col gap-4">
          <BaseButton
            as="a"
            href="/"
            class="w-fit"
            variant="tertiary"
            leftIcon="return"
          >
            Repositories
          </BaseButton>
          <h1 class="text-black font-bold text-3xl">
            {{ username }} / {{ repo }}
          </h1>
        </div>
      </div>
      <section class="mt-8">
        <div class="mb-4">
          <select
            v-model="branch"
            class="py-3 bg-white border-[1px] border-gray-200 rounded-lg px-4 min-w-[160px]"
            name="branch"
          >
            <option v-for="branch in branches" :value="branch.commit.sha">
              {{ branch.name }}
            </option>
          </select>
        </div>
        <CommitList :commits="commits" />
        <div class="block my-10 text-center text-gray-400">
          <span v-if="reachedEnd" class="">You've reached the end 🚶‍♂️</span>
          <span v-else>Loading...</span>
        </div>
      </section>
    </main>
  </div>
</template>
@/services/repo @/services/user
