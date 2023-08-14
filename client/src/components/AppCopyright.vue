<script lang="ts">
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<template>
  <span class="text-gray-400 text-sm">© {{ year }} Commitly</span>
</template>
