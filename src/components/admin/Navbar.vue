<template>
  <nav class="flex flex-column align-items-center">
    <img class="pb-1 pt-3 m-0" width="100" :src="(SETTINGS.DEV ? SETTINGS.ipDEV : '') + Logo" alt="logo emiesourire">
    <ul class="menu p-0 m-0 mt-5">
      <router-link :to="item.to" v-for="item in menu" :key="item.label">
        <li class="py-3" >
          {{item.label}} 
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script setup>
import Logo from '../../resources/EmieSourire_Logo_2.svg';
import {SETTINGS} from "../../Settings";

let menu = [
  {label: "Témoignages", to: "/admin/temoignages"},
  {label: "Numerologie", to: "/admin/numerologie"}
]
</script>

<style scoped>
nav {
  background: var(--surface-800);
  width: 250px;
}
h2 {
  font-size: 45px;
  color:black;
  font-weight: 100;
  font-family: Adam Script Light;
  margin: 0;
}
.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
  z-index: 2;
  font-size: 18px;
  list-style: none;
  color: var(--surface-100);
}
.menu a {
  color: var(--surface-100);
  text-decoration: none;
  width: 100%;
}
.menu li {
  position: relative;
}
.menu li:hover {
  background-color: var(--lightgreen);
  color: var(--darkgreen);
  transition: .4s ease;
}
</style>