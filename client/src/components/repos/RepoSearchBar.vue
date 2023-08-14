<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'

const props = defineProps({
  repos: {
    type: Array,
    default: [],
  },
})

let selected = ref(props.repos[0])
let query = ref('')
const router = useRouter()
const route = useRoute()

let filteredRepos = computed(() =>
  query.value === ''
    ? props.repos
    : props.repos.filter((repo) =>
        repo.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
watch(selected, (currVal, prevVal) => {
  router.push({
    name: 'Repo',
    params: { repoId: currVal.name },
  })
})
</script>

<template>
  <div class="relative z-10 w-72">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm"
        >
          <ComboboxInput
            class="w-full bg-gray-100 px-4 py-3 rounded-lg outline-black flex-1 sm:flex-none"
            placeholder="Search by name"
            :displayValue="(repo) => repo.name"
            @change="query = $event.target.value"
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredRepos.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              Nothing found 🤷‍♂️
            </div>

            <ComboboxOption
              v-for="repo in filteredRepos"
              as="template"
              :key="repo.id"
              :value="repo"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-gray-600 text-white': active,
                  'text-gray-900': !active,
                }"
                @click="handleSelect"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ repo.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-gray-600': !active }"
                >
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>