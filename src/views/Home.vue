<template>

  <Navbar />

  <div class="foret">
    <h1 class="text-center"> Coach de vie </h1>
    <h2 class="text-center">Accompagnement émotionnel, énergétique et spirituel</h2>
  </div>

  <article class="py-3">
    <!-- <p class="line-height-4 text-justify">
        J’aime apprendre par le jeu alors je t’ai préparé du contenu interactif au cas où tu serais comme moi, assez vite ennuyé(e) par un site qui ne contient que du texte.
      Cela te permettra d’en apprendre plus sur les prestations que je propose et sur les outils que j’ai à disposition pour répondre à tes attentes.
      Si tu n’es pas un grand fan de contenu interactif j’ai pensé à toi également car j’ai ajouté un bouton « Voir le résultat » qui te permettra d’avoir tout de suite les réponses que tu recherches 😉. (Disponible uniquement sur ordinateur)
    </p> -->
    <p class="line-height-4 text-justify">
      Bonjour et bienvenue à la belle âme que tu es. Que tu sois arrivé(e) par hasard, parce-qu’on t’a parlé de moi ou parce que tu as fait une recherche internet sur les centres d'intérêts que l'on a en commun, je suis ravie que tu sois ici aujourd’hui.
      Saches que tu auras toujours ta place dans cet espace que j’ai créé, que tu choisisses ou non de prendre une séance avec moi.
      Peut-être que je pourrais t’aider d’une autre manière que celle que tu imagines, qui sait ?
      Je t’invite à aller voir plus bas dans le site et à continuer ton exploration, j’ai beaucoup de choses à partager avec toi.
    </p>
  </article>

  <Promesses />

  <Outils />

  <InteractionsPromessesOutils id="interactions"/>

  <Temoignages />

  <Footer />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Promesses from "../components/Promesses.vue";
import Outils from "../components/Outils.vue";
import Footer from "../components/Footer.vue";
import Temoignages from "../components/Temoignages.vue";
import InteractionsPromessesOutils from "../components/InteractionsPromessesOutils.vue";

</script>

<style scoped>
.foret {
  position: relative;
  overflow: hidden;
  color: white;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 200px 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../resources/foret.jpg');
  background-position: center;
  background-size: cover;
  text-align: justify;
}

.foret h1 {
  margin: 0;
  z-index: 2;
  line-height: 1;
  font-size: 3.5rem;
  font-weight: bold;
  text-transform :uppercase;
  letter-spacing: 4px;
  color: var(--lightpink);
  text-shadow: 1px 1px 10px black;
}

.foret h2 {
  color: var(--lightgreen);
  text-shadow: 0 0 10px black;
}

.foret h1, .foret h2 {
  font-family: Alegreya;
}

article{
  padding: 10px 20px;
  background-color: var(--snow);
}

article p {
  padding: 20px;
  font-size: 1.3rem;
}

@media screen and (max-width: 1150px){
  #interactions {
    display: none;
  }
  .foret{
    padding: 100px 100px 30px;
  }
}

@media screen and (max-width: 500px) {
  .foret {
    padding: 100px 50px 30px;
  }
}

</style>
