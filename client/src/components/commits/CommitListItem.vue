<script lang="ts">
import { defineComponent } from 'vue'
import { formatRelative } from 'date-fns'

export default defineComponent({
  data() {
    return {
      shaCopied: false,
    }
  },
  props: {
    message: { type: String, default: 'commit message' },
    date: { type: Date, default: new Date() },
    sha: { type: String, default: '1234567' },
  },
  methods: {
    copySha() {
      navigator.clipboard.writeText(this.$props.sha as string)
      this.shaCopied = true
    },
  },
  computed: {
    relativeDate() {
      return formatRelative(this.$props.date as Date, new Date())
    },
  },
})
</script>

<template>
  <div
    class="relative bg-transparent p-4 before:content-[''] before:block before:h-full before:w-[2px] before:left-[27px] before:bg-gray-200 before:absolute before:top-0 min-h-[150px]"
  >
    <div class="relative flex gap-6 z-10">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#FBFBFB"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="#535353"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 12H9"
          stroke="#535353"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 12H21"
          stroke="#535353"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="flex flex-col gap-4 flex-1">
        <span>{{ date?.toLocaleDateString('en-uk') }}</span>
        <div
          class="flex justify-between items-center p-4 bg-white border-[1px] border-gray-200 rounded-xl"
        >
          <div class="flex flex-col gap-2">
            <p class="text-xl font-bold">{{ message }}</p>
            <span class="text-xs font-medium text-gray-400"
              >Committed {{ relativeDate }}</span
            >
          </div>
          <Popper content="Copied!">
            <BaseButton
              @click="copySha"
              variant="tertiary"
              class="p-3 bg-gray-100 rounded-lg flex gap-2 text-gray-400"
            >
              <svg
                v-if="!shaCopied"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 8H10C8.89543 8 8 8.89543 8 10V20C8 21.1046 8.89543 22 10 22H20C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 16C2.9 16 2 15.1 2 14V4C2 2.9 2.9 2 4 2H14C15.1 2 16 2.9 16 4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <div class="h-[25px] w-[1px] bg-gray-300"></div>
              <span class="text-black">{{ sha }}</span>
            </BaseButton>
          </Popper>
        </div>
      </div>
    </div>
  </div>
</template>
