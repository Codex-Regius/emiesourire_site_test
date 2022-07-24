<template>
  <Toast />
  <Login v-if="!logIn" @subscribe="isAdmin" />
  <Home v-else />
</template>

<script setup>
import Login from '../components/admin/Login.vue'
import Home from "../components/admin/Home.vue";
import { ref } from '@vue/reactivity';

let logIn = ref(false);

let isAdmin = () => {
  logIn.value = true;
}

</script>

<style scoped>

</style>