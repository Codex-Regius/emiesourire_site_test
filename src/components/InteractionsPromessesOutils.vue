<template>
  <section class="p-5 interactions p-custom-center">

    <Toast />

    <div class="flex justify-content-between align-items-center p-custom-center m-custom-center">
      <h3 class="text-left">A toi de jouer !</h3>
    </div>

    <p class="text-justify my-3 py-2 line-height-4 p-custom-center m-custom-center">
      Voici un mini-jeu pour deviner laquelle ou lesquelles de mes compétences peuvent t’apporter les bénéfices que j’ai cités plus haut. Tu ne retrouveras pas forcément tous les points de la liste dans ce mini-jeu et j’en ai glissé quelques-un supplémentaires également. Il suffira de cliquer sur un bénéfice puis de cliquer sur une case « compétences » correspondantes ; s’ils sont en plusieurs exemplaires c’est que plusieurs de mes compétences peuvent t’apporter ce même bénéfice. Tu remarqueras que je n’ai pas mis de case « passage d’âmes » car, concernant les vivants, c’est une compétence qui complète chacune des autres et je n’aurais pas trouvé pertinent de la rajouter au jeu ; et concernant les défunts, je trouvais le texte de présentation de la compétence assez clair.
      <br /> <br />
      Si tu n’es pas un grand fan de contenu interactif j’ai pensé à toi également car j’ai ajouté un bouton « Voir le résultat » qui te permettra d’avoir tout de suite les réponses que tu recherches 😁.
    </p>

    <div class="flex justify-content-around p-custom-center">

      <div class="flex flex-wrap flex-column">
        <!-- <h5 class="text-left">Les promesses</h5> -->
        <div
            v-for="(p,i) in promesses" :key="p.label"
            v-show="p.outils.length > 0"
            @click="dragStartElement($event, p, i)"
            class="promesses m-1 text-justify justify-content-between align-items-center flex-column"
            :class="[p.outils.length > 0 ? 'flex' : '']"
            style="cursor:pointer"
            :style="clickData?.label === p.label ? 'box-shadow: 0 0 3px black; transform: scale(1.2)' : ''"
          >
          <p class="m-0 py-2 px-3" style="background: var(--lightgreen); width: 100%; border-top-left-radius: 5px; border-top-right-radius: 5px">{{p.label}}</p>
          <span style="border-top: 1px solid black; width:100%"></span>
          <p class="m-0 text-center p-2" style="width: 100%">x{{ p.outils.length }}</p>
        </div>
      </div>


      <div class="flex flex-wrap justify-content-end" >
        <!-- <h5 class="text-left">Les Outils</h5> -->
        <div v-for="(o, i) in outils" :key="o.label" class="m-1 outils"
             @click="dropElement($event,o, i)"
        >
          <h3 class="p-1" style="margin:0; border-bottom: 1px solid; font-size: 20px; background: var(--lightpink); border-top-left-radius: 5px; border-top-right-radius: 5px"> {{o.label}} </h3>
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

    <div class="flex justify-content-end py-5 p-custom-center">
      <Button style="background: var(--lightpink); color:white;border-radius:5px; font-size:16px;" class="p-button-sm p-button-outlined p-button-secondary"  label="Voir le résultat" icon="pi pi-eye" @click="resultat" />
    </div>

  </section>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useToast } from "primevue/usetoast";

export default {
  setup(){
    const toast = useToast();

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

    let clickData = ref("");

    const dragStartElement = (event, element, index) => {
      clickData.value = "";
      console.log(event);
      console.log(element);
      // event.dataTransfer.setData("promesse", JSON.stringify(element))
      clickData.value = element;
    }
    const dropElement = (event, element, i) => {
      if(clickData.value.length === 0) {
        return toast.add({severity:'info', summary: 'Jeu', detail:"Sélectionnez d'abord un bénéfice", life: 3000});
      }
      let item = clickData.value;

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

      clickData.value = "";
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
      resultat,
      clickData
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