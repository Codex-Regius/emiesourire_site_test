<template>
  <div class="flex">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>

<style scoped>
#app {
  height: unset;
}
div {
  min-height: 100%;
}
</style>