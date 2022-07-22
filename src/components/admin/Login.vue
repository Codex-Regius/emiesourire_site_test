<template>
  <div class="p-custom-center flex justify-content-center align-items-center" style="background: var(--snow); height: inherit">
    <div class="shadow-2 border-50 container">
      <router-link to="/">
        <img class="pb-1 pt-3 m-0" width="100" :src="(SETTINGS.DEV ? SETTINGS.ipDEV : '') + Logo" alt="logo emiesourire">
      </router-link>
      <form class="flex flex-column m-auto px-3 pb-5" >
        <InputText class="mb-2 mx-4 p-3" placeholder="Identifiant" name="id" type="text"  required />
        <InputText class="my-3 mx-4 p-3" placeholder="Password" name="password" type="password" required />
        <Button icon="pi pi-arrow-right" class="m-auto mt-3 p-button-rounded p-button-outlined" style="background-color: #FAFAFA; color: var(--darkgreen); border-color: var(--darkgreen); width: 2.5rem; height: 2.5rem" />
      </form>
    </div>
  </div>
</template>

<script setup>
import Logo from '../../resources/EmieSourire_Logo_2.svg';
import {SETTINGS} from "../../Settings";

</script>

<style scoped>
.container {
  width: 400px;
  background: var(--lightgreen);
}
</style>