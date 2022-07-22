<template>
  <Navbar />

  <div class="container" style="">

    <div class="p-custom-center">
      <p class="text-justify py-5 px-4 m-5 line-height-3 p-custom-center m-custom-center">
        J’ai caché mes prestations derrière ces cartes d’oracle. Pose ta question (par exemple « Quelle prestation me conviendrait le mieux en premier lieu ? », concentre-toi sur les ressentis dans ton corps quand tu regardes les cartes et suis ton intuition 😊 Il ne s’agit pas de se concentrer pour mieux voir à travers mais au contraire de fermer les yeux, de lâcher prise et de s’écouter. Clique pour découvrir la prestation qui répond à ta question. Tu peux même cliquer sur plusieurs cartes si tu le veux. Leur emplacement est aléatoire, à chaque fois que tu reviendras sur cet onglet elles changeront de place, comme ça tu pourras réitérer l’expérience à chaque fois que tu le souhaites.
      </p>
    </div>

    <section class="my-3 mx-1 flex justify-content-evenly align-items-center">

      <article class="m-2" v-for="(card, index) in cards" :key="index" @click.prevent="flipCard(card)">
        <div class="article-container" :class="[card.flipped ? 'flip' : '']">
          <div class="front">
            <img :src="(SETTINGS.DEV ? SETTINGS.ipDEV : '') + imgBase" alt="image arrière de prestations">
          </div>
          <div class="back">
            <img :src="(SETTINGS.DEV ? SETTINGS.ipDEV : '') + card.image" :alt="card.text">
          </div>
        </div>
      </article>

    </section>
  </div>

  <Footer />
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import {SETTINGS} from "../Settings";
import imgBase from '../resources/imgBase.jpeg';
import SeanceLibre from '../resources/seanceLibre.jpeg';
import TirageCarte from '../resources/cartomancie.jpeg';
import Communication from '../resources/communication.jpeg';
import ConnexionLieu from '../resources/connexionLieu.jpeg';
import {ref} from "@vue/reactivity";
import {onBeforeMount} from "vue";

let cards = ref([
  {image: SeanceLibre, flipped: false, text: "prestation de séance de libre"},
  {image: TirageCarte, flipped: false, text: "prestation de tirage de carte" },
  {image: Communication, flipped: false, text: "prestation de communication avec un décédé"},
  {image: ConnexionLieu, flipped: false, text: "prestation de connexion à un lieu"},
])

function flipCard(card){
  card.flipped = !card.flipped;
}

onBeforeMount(() => {
  cards.value.sort(() => (Math.random() > .5) ? 1 : -1);
})

</script>

<style scoped>
.container {
  min-height: 80vh;
  padding-top: 100px;
  background: var(--snow)
}
article{
  width: 300px;
  height: 150px;
  cursor: pointer;
  border-radius: 30px;
}
.flip {
  transform:translate3d(0,0,10px) rotateY(180deg) scale(1.5);
  z-index: 200;
}
.article-container{
  position: relative;
  width: 95%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
}
article:hover {
  /*box-shadow: 0 0 10px var(--darkgreen);*/
  border-radius: 30px;
}
img {
  border-radius: 5%;
  box-shadow: 0 0 10px var(--darkgreen);
  width: 100%
}
@media screen and (max-width: 450px){
  .flip {
    transform:translate3d(0,0,10px) rotateY(180deg) scale(1) translateY(-50%);
    position: absolute;
    top: 75%;
    left: 3%;
    z-index: 200;
  }
}
@media screen and (min-width: 451px) and (max-width: 800px){
  article {
    height: 350px
  }
  .flip {
    transform:translate3d(0,0,10px) rotateY(180deg) scale(2);
  }
}
@media screen and (min-width: 801px){
  article {
    height: 550px
  }
}
</style>