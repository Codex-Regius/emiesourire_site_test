<template>
  <footer class="py-2 px-5">
    <div class="flex flex-wrap flex-column justify-content-center align-items-center w-">
      <img width="70" :src=" (SETTINGS.DEV ? SETTINGS.ipDEV : '')  + logo " alt="logo emiesourire">
      <div class="flex align-items-center">
        <p class="text-center mr-2 m-0">
          © Emiesourire, {{new Date().getFullYear()}} -
        </p>
        <router-link to="/mentions-legales">Mentions légales</router-link>
        <p class="m-0 ml-2">-</p>
        <a href="http://instagram.com/emiesourire" target="_blank" style="font-size: 20px"><i class="pi pi-instagram p-2"> </i></a>
        <a href="http://facebook.com/emiesourire" target="_blank" style="font-size: 20px"><i class="pi pi-facebook p-2"></i></a>
      </div>
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

a {
  color: white;
  text-decoration: none;
  font-size: 15px
}

a:hover{
  color: var(--darkgreen)
}
</style>