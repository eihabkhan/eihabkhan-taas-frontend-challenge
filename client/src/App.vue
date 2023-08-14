<script setup lang="ts">
import AppNavbar from './components/navigation/AppNavbar.vue'
import AppFooter from './components/navigation/AppFooter.vue'
</script>

<template>
  <AppNavbar v-if="$route.name !== 'Login'" />
  <router-view></router-view>
  <AppFooter v-if="$route.name !== 'Login'" />
</template>
