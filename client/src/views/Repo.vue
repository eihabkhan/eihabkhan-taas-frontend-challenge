<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
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
            :leftIcon="ReturnIcon"
          >
            Repositories
          </BaseButton>
          <h1 class="text-black font-bold text-3xl">username / repo-name</h1>
        </div>
      </div>
      <section class="mt-8">
        <div class="mb-4">
          <select
            class="py-3 bg-white border-[1px] border-gray-200 rounded-lg px-4 min-w-[160px]"
            name="branch"
          >
            <option value="main">main</option>
          </select>
        </div>
        <!-- <CommitList :commits="commits" /> -->
      </section>
    </main>
  </div>
</template>
