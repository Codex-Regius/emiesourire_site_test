<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <img :src="(SETTINGS.DEV ? SETTINGS.ipDEV : '') + Logo" alt="logo emiesourire">
      <h2>Emiesourire</h2>
    </router-link>
    <ul class="menu px-3" :class=" burger ? 'active' : '' ">
      <li v-for="item in items" :key="item.label" :style="[ item.label == 'Mon espace' ? 'opacity: .5' : '']">
        <router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}">
          <a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}">{{item.label}}</a>
        </router-link>
      </li>
    </ul>
    <Button class="hamburger mr-3" @click="burger=!burger" :icon="burger ? 'pi pi-times' : 'pi pi-bars' "  />
  </nav>
</template>

<script setup>
import {ref} from "@vue/reactivity";
import Logo from '../resources/logo_v2.png';
import {SETTINGS} from "../Settings";

let burger = ref(false);

let items = ref([
  {
    label: "Accueil",
    icon: "pi pi-home",
    to : "/"
  },
  {
    label: "Prestations",
    icon: "pi pi-home",
    to : "/prestations"
  },
  {
    label: "Qui suis-je?",
    icon: "pi pi-home",
    to : "/qui-suis-je"
  },
  {
    label: "Contact",
    icon: "pi pi-home",
    to : "/contact"
  },
  {
    label: "Mon espace",
    to : "/"
  }
])
</script>

<style scoped>

a {
  text-decoration: none;
}
li {
  list-style: none;
  padding: 5px 15px;
}
ul {
  margin: 0;
  padding:0;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  background-color: white;
  color: black;
  z-index: 10000;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--darkgreen);
}
/* LOGO */
.logo {
  display: flex;
  align-items: center;
  width: 30%
}
.logo img {
  margin: 0rem 1rem;
  width: 4rem;
}
.logo h2 {
  font-size: 45px;
  color:black;
  font-weight: 100;
  font-family: Adam Script Light;
  margin: 0;
}
/* NAVBAR MENU */
.menu {
  display: flex;
  align-items: center;
  gap: 1em;
  z-index: 2;
  font-size: 18px;
}
.menu a {
  color: black;
}
.menu li:hover {
  background-color: var(--lightgreen);
  border-radius: 5px;
  transition: .4s ease;
}

/*RESPONSIVE NAVBAR MENU STARTS*/

/*HAMBURGER MENU*/
.hamburger {
  display: none;
  font-size: 24px;
  user-select: none;
  cursor:pointer;
  background: white;
  border: none;
  color: black;
  padding: 0;
}
/* APPLYING MEDIA QUERIES */
@media screen and  (max-width: 920px) {
  .menu {
    position: absolute;
    background-color:white;
    flex-direction: column;
    left: -100%;
    width: 100%;
    top: 6rem;
    text-align: center;
    padding: 16px 0;
    border-bottom: 1px solid var(--darkgreen);
  }
  .menu.active{
    left:0;
  }
  .menu li:hover {
    display: inline-block;
    transition: 0.3s ease;
  }
  .menu li + li {
    margin-top: 12px;
  }
  .hamburger {
    display: block;
  }
}
</style>