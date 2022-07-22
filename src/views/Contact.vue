<template>
  <Navbar />

  <div class="m-auto" style="padding-top: 100px;">

    <Toast />

    <section class="flex flex-wrap contact m-auto mx-8 my-8" >

      <form class="flex flex-column m-auto my-5 p-3" >
        <h3 class="m-0 mb-3"> Par email </h3>
        <InputText class="m-3 p-3" placeholder="Nom" name="nom" type="text" v-model="username" required />
        <InputText class="m-3 p-3" placeholder="Email" name="email" type="email" v-model="email" required />
        <Textarea placeholder="Message" name="message" class="m-3 p-3" rows="5" cols="30" v-model="message" required />
        <Button class="m-auto mt-3" @click="sendEmail" label="Envoyer" style="background-color: #FAFAFA; color: black; border-color: black; width: fit-content" />
      </form>

      <hr class="mx-0 my-4">

      <div class="flex flex-column m-auto my-5 p-3">
        <h3 class="m-0 mb-3"> Par téléphone </h3>
        <p class="phone"> 07 67 32 28 67 </p>
        <p> ou </p>
        <i class="pi pi-whatsapp p-2 m-2"  style="font-size: 20px" > Whatsapp </i>
        <i class="pi pi-instagram p-2 mb-2"> <a href="http://instagram.com/emiesourire" target="_blank" style="font-size: 20px"> Instagram</a> </i>
        <i class="pi pi-facebook p-2"> <a href="http://facebook.com/emiesourire" target="_blank" style="font-size: 20px"> Facebook</a> </i>

      </div>

    </section>

  </div>

  <Footer />
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import {ref} from "@vue/reactivity";
import { useToast } from "primevue/usetoast";

let username = ref("");
let email = ref("");
let message = ref("");
const toast = useToast();

const sendEmail = () => {

  let data = new FormData();
  data.append("nom", username.value);
  data.append("email", email.value);
  data.append("message", message.value)

  toast.add({severity:'success', summary: 'Email', detail:'Message envoyé', life: 3000});
  username.value = "";
  email.value = "";
  message.value = "";

}



</script>

<style scoped>
a{
  color: var(--darkgreen);
  text-decoration: unset;
}
i{
  color: var(--darkgreen);
}
.phone {
  background: white;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 20px;
}
.contact {
  background: var(--lightgreen);
  border-radius: 10px;
  box-shadow: 0 0 3px #FAFAFA;
}

@media screen and (max-width: 750px){
  hr {
    display: none;
  }
}

@media screen and (max-width: 550px) {
  section {
    margin: 20px !important;
  }
}

@media screen and (max-width: 375px) {
  input, textarea {
    padding: 10px 0 !important;
    margin: 5px 0 !important;
  }
  form {
    padding: 0 !important;
  }
}

</style>