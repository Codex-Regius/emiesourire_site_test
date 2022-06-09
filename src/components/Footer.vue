<template>
  <footer class="py-2 px-5">
    <div class="flex flex-wrap flex-column justify-content-center align-items-center w-">
      <img width="70" :src=" (SETTINGS.DEV ? SETTINGS.ipDEV : '')  + logo " alt="logo emiesourire">
      <p class="text-center mb-0 mt-1">© Emiesourire, 2022</p>
    </div>
  </footer>
</template>

<script setup>
import logo from '../resources/logo_v2.png';
import {SETTINGS} from "../Settings";
</script>

<style scoped>
footer {
  background-color: var(--lightpink);
  color: white;
}
</style>