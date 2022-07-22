<template>
  <!-- <hr class="my-5"> -->
  <section class="p-5 flex flex-column justify-content-center relative p-custom-center">
    <h3 class="text-left p-custom-center m-custom-center uppercase " style="padding-right: 2rem; padding-left: 2rem;">Temoignages</h3>
    <Carousel :value="temoignages" :numVisible="1" :numScroll="1" class="py-5 p-custom-center" >
      <template #item="{data}">

      <span class="flex justify-content-center flex-column">

        <p class="font-italic custom-fs-2 overflow-hidden px-3" style="margin: 0; color:#838383;" :style="data.all ? '' : 'max-height: 150px'">
          <i class="mdi mdi-format-quote-open custom-fs-4 mr-2" style="color: lightgrey"></i>
           {{data.description}}
           <i class="mdi mdi-format-quote-close custom-fs-4 ml-2" style="color: lightgrey"></i>
        </p>

        <Button v-if="data.description.length > 300"
                style="width: 20px; height: 20px"
                :icon=" data.all ? 'pi pi-angle-up' : 'pi pi-angle-down'"
                class="p-button-rounded p-button-outlined p-button-secondary my-2 align-self-center"  @click="data.all = !data.all" />

        <p class="align-self-end text-s" style="font-family: Alegreya" > {{data.nom}} </p>

      </span>


      </template>
    </Carousel>
  </section>
  <!-- <hr class="my-5"> -->
</template>

<script setup>
import {ref} from '@vue/reactivity';
const temoignages = ref([
  {
    nom: "Severine Wlo", 
    description: "Émilie a un large éventail de compétences et de dons.\n" +
        "J'ai eu la chance de pouvoir bénéficier d'une séance d'EFT extraordinaire dans le sens où elle y a mêlé une lecture d'âme. Ce qui en est ressorti a été bluffant. Cette sensation de gorge nouée s'est largement apaisée.\n" +
        "J'ai également pu recevoir un soin pour harmoniser les énergies de ma maison. Le travail est en cours.\n" +
        "En plus d'être compétente, Émilie est douce, pertinente et bienveillante. Un rayon de soleil qui dynamise et apaise l'âme. Merci 🙏",
    all: false
  },
  {
    nom: "Miassa Brecheteau", 
    description: "Émilie est une personne très douce et délicate! La séance a été magique. " +
        "Elle a su trouver des mots justes, sans faire dans la complaisance. " +
        "J'ai pu recevoir des messages de mes grands-parents, et de nombreux signes de mes Guides par la suite... " +
        "Je ne la remercierai jamais assez pour ce moment émouvant, cette parenthèse... cela m'a beaucoup apaisée! 🙂🙏",
    all: false
  }, 
  {
    nom: "Philippe Menon",
    description: `Émilie est un exemple même de l'adage "La valeur n'attend pas le nombre des années".
    Ses compétences sont multiples, son intuition sûre, et sa guidance précise. Pour ma part cela m'a beaucoup aidé et soutenu dans un moment délicat de ma vie.
    Merci Émilie et bonne suite à toi.`,
    all: false
  }
]);

</script>

<style scoped>
section {
  min-height: 500px;
}
</style>