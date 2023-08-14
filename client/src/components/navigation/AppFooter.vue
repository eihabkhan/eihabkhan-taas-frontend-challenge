<script lang="ts">
import AppCopyright from '../AppCopyright.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { AppCopyright },
})
</script>

<template>
  <footer class="mt-10 w-full bg-gray-100">
    <div
      class="flex justify-between items-center container max-w-[1024px] py-4"
    >
      <AppCopyright />
      <BaseButton
        as="a"
        href="https://github.com/eihabkhan/eihabkhan-taas-frontend-challenge"
        target="_blank"
        variant="tertiary"
      >
        View in GitHub
      </BaseButton>
    </div>
  </footer>
</template>
