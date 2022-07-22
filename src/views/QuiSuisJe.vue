<template>

  <Navbar />

  <div class="px-4 pb-5 container p-custom-center" style="padding-top: 100px; background-color: var(--snow);">

  <h1 class="pt-5 text-left p-custom-center m-custom-center" style="margin:0"> Qui suis je ? </h1>

  <article class="py-5 p-custom-center m-custom-center" style="padding-right: 2rem; padding-left: 2rem;">
    <div class="picture">
      <img :src=" (SETTINGS.DEV ? SETTINGS.ipDEV : '') + emilie" alt="" class="mr-3 mt-2 ">
    </div>
    <p class="text-justify me m-0">
      Tu as cliqué sur cet onglet pour en savoir un peu plus sur moi alors je vais te raconter une partie de mon histoire personnelle et professionnelle pour que tu comprennes ce qui m’a poussée à choisir ce métier.
      Comme beaucoup de personnes, j’ai eu une enfance et une adolescence compliquée. J’ai subi plusieurs traumatismes dans différentes sphères de ma vie qui m’ont plongée successivement en dépression et en trouble anxieux généralisé. Suite à ça on m’a découvert plusieurs maladies chroniques inflammatoires, dites « incurables » pour le moment, faute de traitement connu. Ça a été un déclencheur incroyable pour moi car j’ai décidé à ce moment-là de travailler sur mon émotionnel et mon mental pour que ma vie soit plus simple et plus belle malgré les maladies. Cela faisait plusieurs années que j’avais du mal à trouver ma voie professionnelle et j’ai découvert l’EFT à ce moment-là. Ça m’a énormément aidée dans ma vie personnelle alors j’ai décidé de m’y former car je voulais partager ça avec un maximum de personnes, leur permettre de reprendre espoir, de devenir réellement acteurs de leur vie. Une chose en entraînant une autre, j’ai ouvert la porte de la spiritualité et plusieurs autres portes suite à ça, d’abord pour moi-même puis j’ai eu envie de me former à toutes les pratiques que j’avais découvertes. Toutes ces techniques réunies m’ont permis d’être plus en accord avec moi-même et mes émotions, d’apaiser mes relations aux autres, de libérer de vieux traumatismes et de me libérer de tous les symptômes des maladies qu’on m’avait diagnostiqué et sur lesquelles j’ai travaillé jusqu’à présent. Mon expérience personnelle et toutes les compétences que j’ai acquises professionnellement me permettent aujourd’hui de t’accompagner vers ton propre mieux-être. Crois en toi, c’est possible d’aller mieux. C’est ce que je suis venue partager aujourd’hui, c’est pour t’aider à prendre conscience de ça et te libérer toi aussi de ce qui te pèse que j’ai choisi de faire ce métier. 🤍✨
    </p>
  </article>

  </div>

  <Footer />

</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import emilie from '../resources/emilie.png';
import {SETTINGS} from "../Settings";

</script>

<style scoped>
.me {
  line-height: 2;
  font-weight: lighter;
  letter-spacing: 1px;
}

.picture {
  max-width: 25%;
}

img {
  float: left;
  width:100%;
  border-radius: 10px;
  box-shadow: 0 0 3px
}

@media screen and (min-width: 1600px) {
  .container {
    padding-bottom: 100px;
  }
  .picture {
    max-width: 20%;
  }
}
@media screen and (min-width: 1700px) {
  .picture {
    max-width: 15%;
  }
}

@media screen and (max-width: 650px) {
  img{
    float: none !important;
  }

  .picture {
    max-width: 60%;
    margin: auto;
  }
}
@media screen and (max-width: 900px) {
  .picture {
    max-width: 35%;
  }
}
@media screen and (max-width: 800px) {
  .picture {
    max-width: 45%;
  }
}
@media screen and (max-width: 700px) {
  .picture {
    max-width: 50%;
  }
}
</style>