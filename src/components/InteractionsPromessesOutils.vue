<template>
  <section class="p-5 interactions">
    <div class="flex justify-content-between align-items-center">
      <h3 class="text-left">A toi de jouer !</h3>
      <Button style="background: var(--lightpink); color:white;border-radius:5px; font-size:16px;" class="p-button-sm p-button-outlined p-button-secondary"  label="Voir le résultat" icon="pi pi-eye" @click="resultat" />
    </div>

    <p class="text-justify my-3 p-2">
      Voici un mini-jeu pour deviner laquelle ou lesquelles de mes compétences peuvent t’apporter les bénéfices que j’ai cités plus haut. Tu ne retrouveras pas forcément tous les points de la liste dans ce mini-jeu et j’en ai glissé quelques-un supplémentaires également. Il suffira de faire glisser les bénéfices vers les cases « compétences » correspondantes ; s’ils sont en plusieurs exemplaires c’est que plusieurs de mes compétences peuvent t’apporter ce même bénéfice. Si tu n’es pas un grand fan de contenu interactif j’ai pensé à toi également car j’ai ajouté un bouton « Voir le résultat » qui te permettra d’avoir tout de suite les réponses que tu recherches 😁. (Disponible uniquement sur ordinateur)
    </p>

    <div class="flex justify-content-around">

      <div class="flex flex-wrap flex-column">
        <!-- <h5 class="text-left">Les promesses</h5> -->
        <div
            v-for="(p,i) in promesses" :key="p.label"
            v-show="p.outils.length > 0"
            :draggable="true"
            @dragstart="dragStartElement($event, p, i)"
            class="p-1 promesses m-1 text-justify justify-content-between align-items-center"
            :class="[p.outils.length > 0 ? 'flex' : '']"
            style="cursor:move">
          {{p.label}} <b class="ml-3 mr-1">x{{ p.outils.length }}</b>
        </div>
      </div>


      <div class="flex flex-wrap justify-content-end" >
        <!-- <h5 class="text-left">Les Outils</h5> -->
        <div v-for="(o, i) in outils" :key="o.label" class="m-1 outils" :draggable="true"
             @drop="dropElement($event,o, i)"
             @dragover.prevent
             @dragenter.prevent
        >
          <h3 class="p-1" style="margin:0; border-bottom: 1px solid; font-size: 20px"> {{o.label}} </h3>
          <div style="min-height: 50px; min-width: 100px">
            <ul class="m-0">
              <li v-for="(d, i) in o.data" :key="i" style="margin:0; font-size: 13px" class="p-1 text-justify">
                {{d}}
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    let outils = ref([
      {label: "EFT / EFT Matrix", data: []},
      {label: "Chamanisme", data: []},
      {label: "Développement personnel", data: []},
      {label: "Lahochi / Soins énergétiques", data: []},
      {label: "Cartomancie", data: []},
      {label: "Pendule", data: []}
    ])

    let promesses = ref([
      {label: "Identifier les émotions et évènements de ton passé qui se cachent derrière un symptôme physique et être accompagné dans ton chemin face à ces symptômes", outils: ["EFT / EFT Matrix", "Chamanisme", "Cartomancie", "Lahochi / Soins énergétiques", "Développement personnel", "Pendule"]},
      {label: "Comprendre et accepter une situation / émotion / comportement", outils: ["EFT / EFT Matrix", "Cartomancie", "Développement personnel", "Chamanisme"]},
      {label: "Transformer tes cercles vicieux (schémas répétitifs) en cercles vertueux", outils: ["EFT / EFT Matrix", "Chamanisme", "Développement personnel", "Lahochi / Soins énergétiques"]},
      {label: "(Re)découvrir qui tu es vraiment ", outils: ["EFT / EFT Matrix", "Développement personnel"]},
      {label: "Apaiser tes mémoires de vies antérieures et de transgénérationnel", outils: ["EFT / EFT Matrix", "Chamanisme", "Lahochi / Soins énergétiques"]},
      {label: "Avoir des prises de conscience / des remises en question / des réponses aux questions que tu te poses ", outils: ["EFT / EFT Matrix", "Chamanisme", "Cartomancie", "Pendule", "Développement personnel"]},
      {label: "T’aider à surmonter des évènements douloureux ", outils: ["EFT / EFT Matrix", "Chamanisme", "Lahochi / Soins énergétiques"]},
    ])

    const dragStartElement = (event, element, index) => {
      event.dataTransfer.dropEffect ="move";
      event.dataTransfer.effectAllowed ="move";
      event.dataTransfer.setData("promesse", JSON.stringify(element))
    }
    const dropElement = (event, element, i) => {
      let item = JSON.parse(event.dataTransfer.getData("promesse"))

      let div = document.getElementsByClassName("outils")[i];

      // Vérifier outils
      if( !item.outils.includes(element.label) ) {
        div.style.background = "#ffd5d5";
        setTimeout(() => {
          div.style.background = "#fff";
        }, 1000);
        return;
      };

      div.style.background = "rgb(40 149 26 / 24%)";
      setTimeout(() => {
        div.style.background = "#fff";
      }, 1000);

      element.data.push(item.label);
      let index = promesses.value.find(x => x.label === item.label).outils.indexOf(element.label);
      promesses.value.find(x => x.label === item.label).outils.splice(index, 1);
    }

    const resultat = () => {
      promesses.value.forEach(x => {
        x.outils.forEach(y => {
          outils.value.filter(z => z.label.toLowerCase() === y.toLowerCase())[0].data.push(x.label);
        })
        x.outils = [];
        console.log(x)
      })
    }

    return {
      outils,
      promesses, 
      dragStartElement,
      dropElement,
      resultat
    }
  }
}
</script>

<style scoped>
.interactions{
  background-color: var(--snow);
}
.outils, .promesses{
  background: white;
  border-radius: 5px;
  border: 1px solid;
}

.outils {
  width: 45%;
  max-width: 75%;
}
</style>