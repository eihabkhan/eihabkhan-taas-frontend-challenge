<script lang="ts">
import { defineComponent } from 'vue'
import AppNavbar from '../components/navigation/AppNavbar.vue'
import AppFooter from '../components/navigation/AppFooter.vue'
import RepoList from '../components/repos/RepoList.vue'

export default defineComponent({
  components: {
    AppNavbar,
    AppFooter,
    RepoList,
  },
})
</script>

<template>
  <div class="overflow-hidden">
    <AppNavbar />
    <main class="container min-h-[calc(100vh-282px)] max-w-[1024px]">
      <div class="mt-24 flex items-center justify-between">
        <h1 class="text-black font-bold text-3xl">My Repositories</h1>
        <input
          type="text"
          placeholder="search"
          class="bg-gray-100 px-4 py-2 rounded-lg outline-black"
        />
      </div>
      <section
        class="mt-8 bg-white border-[1px] border-black/10 p-4 pb-0 rounded-xl"
      >
        <RepoList :repos="[]" />
      </section>
    </main>
    <AppFooter />
  </div>
</template>
