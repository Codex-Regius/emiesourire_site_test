<template>
  <!-- <hr class="my-5"> -->
  <section class="py-5 flex flex-column justify-content-center relative">
    <h3 class="text-left px-5 absolute top-0 uppercase" >Temoignages</h3>
    <Carousel :value="temoignages" :numVisible="1" :numScroll="1" class="py-5" >
      <template #item="{data}">

      <span class="flex justify-content-center flex-column">

        <p class="font-italic text-2xl" style="margin: 0; color:#838383;">
          <i class="mdi mdi-format-quote-open text-4xl mr-2" style="color: lightgrey"></i>
           {{data.description}}
           <i class="mdi mdi-format-quote-close text-4xl ml-2" style="color: lightgrey"></i>
        </p>

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
        "En plus d'être compétente, Émilie est douce, pertinente et bienveillante. Un rayon de soleil qui dynamise et apaise l'âme. Merci 🙏"
  },
  {
    nom: "Miassa Brecheteau", 
    description: "Émilie est une personne très douce et délicate! La séance a été magique. " +
        "Elle a su trouver des mots justes, sans faire dans la complaisance. " +
        "J'ai pu recevoir des messages de mes grands-parents, et de nombreux signes de mes Guides par la suite... " +
        "Je ne la remercierai jamais assez pour ce moment émouvant, cette parenthèse... cela m'a beaucoup apaisée! 🙂🙏"
  }, 
  {
    nom: "Philippe Menon",
    description: `Émilie est un exemple même de l'adage "La valeur n'attend pas le nombre des années".
    Ses compétences sont multiples, son intuition sûre, et sa guidance précise. Pour ma part cela m'a beaucoup aidé et soutenu dans un moment délicat de ma vie.
    Merci Émilie et bonne suite à toi.`
  }
]);

</script>

<style scoped>
section {
  min-height: 500px;
}
</style>