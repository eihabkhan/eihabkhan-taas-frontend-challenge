<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const icon = defineAsyncComponent(
  () => import(`@/components/icons/${props.name}.svg`)
)
</script>

<template>
  <component :is="icon" class="" />
</template>
