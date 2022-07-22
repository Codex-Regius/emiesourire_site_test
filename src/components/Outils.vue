<template>
  <div class="px-4 mb-5 py-3 p-custom-center">
    <h3 class="text-right p-custom-center m-custom-center">Par quels moyens ?</h3>
      <TabView class="p-custom-center m-custom-center">
        <TabPanel header="EFT / EFT Matrix" >
            <p class="text-justify line-height-4 m-0 overflow-hidden" :style="moreEFT ? 'max-height: 150px' : '' ">
              Qu’est-ce que c’est que l’EFT ? Que veulent dire ces initiales ? En anglais, ça donne « Emotional Freedom Technique » alors si on devait le traduire en français ça donnerait quelque chose comme « Technique de Libération Emotionnelle ». Pour t’expliquer brièvement, l’EFT tient son origine, entre autre, dans la psychologie énergétique et la médecine chinoise. Cette technique consiste à faire des rondes de stimulations sur certains points d’acupuncture situés sur les méridiens du corps. Le fait de stimuler le corps sur ces points précis tout en se connectant émotionnellement à une situation va permettre de faire circuler l’énergie et libérer l’émotion qui est bloquée dans le corps et ce qui a découlé de ce blocage.
              <br /> <br />
                En EFT il y a diverses techniques, nous pouvons autant travailler sur du renforcement positif que sur la libération de traumatismes plus ou moins lourds. J’aime utiliser cet outil pour aider à comprendre l’utilité d’une situation difficile, d’une émotion désagréable afin de l’accepter et de s’en détacher en douceur, dans le respect de soi-même. Je l’utilise aussi lorsqu’une émotion survient pendant un soin énergétique ou un tirage de cartes par exemple.
              <br /> <br />
              Pour aller encore plus loin dans cette technique, il y a l’EFT Matrix Reimprinting, qui permet de travailler également sur des souvenirs dont on ne garde aucune trace, qu’ils soient dans l’enfance ou non et même in utéro et sur du transgénérationnel ou des vies antérieures. La technique est très similaire à l’EFT classique. Simplement, en stimulant sur nous-même, nous allons nous connecter à notre nous du passé et nous visualiser faire les stimulations sur lui tout en le laissant exprimer ce qu’il ressent. L’issue de la scène peut ensuite être transformée en un souvenir plus positif. Une interaction profonde et libératrice avec soi-même.
              Il est nécessaire d’avoir fait plusieurs séances d’EFT avant de pouvoir faire une séance en Matrix.
            </p>
            <Button style="width: 30px; height: 30px" :icon=" moreEFT ? 'pi pi-angle-down' : 'pi pi-angle-up'" class="p-button-rounded p-button-outlined p-button-secondary my-2"  @click="moreEFT = !moreEFT" />
        </TabPanel>
        <TabPanel header="Développement personnel">
            <p class="text-justify line-height-4 overflow-hidden" :style="moreDevPerso ? 'max-height: 150px' : '' ">
              Il existe un nombre incalculable de livres de développement personnel et on en entend souvent parler. Beaucoup de personnes disent en lire énormément et pour autant ne constater aucun changement dans leur vie. Sais-tu pourquoi ? Lorsque tu lis des informations, tu les intègres consciemment mais pas dans ton inconscient. En réalité, le conscient ne représente que 5 % et l’inconscient 95 % alors c’est pour ça que la plupart de ces lecteurs ne constatent aucun changement dans leur vie. Il manque la mise en action et l’ancrage de nouvelles pensées et habitudes de vie et c’est en ça que je peux t’aider. 
              <br /> <br />
              Le développement personnel c’est tout un ensemble de techniques qui te permettront d’œuvrer pour ton propre bien-être et de te mettre en action pour atteindre tes objectifs. Il est important que tu participes à ton propre bien-être. Ce que je souhaite pour toi c’est que tu trouves une forme d’autonomie avec les outils et connaissances que je t’aurais partagées pour que tu puisses prendre ton envol.
            </p>
          <Button style="width: 30px; height: 30px" :icon=" moreDevPerso ? 'pi pi-angle-down' : 'pi pi-angle-up'" class="p-button-rounded p-button-outlined p-button-secondary my-2"  @click="moreDevPerso = !moreDevPerso" />
        </TabPanel>
        <TabPanel header="Lahochi / Soins énergétiques">
            <p class="text-justify line-height-4 overflow-hidden" :style="moreLahochi ? 'max-height: 150px' : '' " >
              Le Lahochi est un soin énergétique dérivé du Reiki. Cela fonctionne par apposition des mains sur certaines parties du corps. L’énergie est canalisée dans les mains du praticien et permets ainsi au client d’accéder à une guérison énergétique par rapport à l’intention qu’il aura posée au début de la séance. Le soin procure une sensation de bien-être et de relaxation, c’est un moment de détente qui permet aussi d’augmenter son taux vibratoire énergétique et de te sentir plus léger.
              <br /> <br />
              Un soin énergétique ne consiste cependant pas uniquement à apposer des mains sur certaines parties du corps, cela peut se faire par la parole et la visualisation également et ça n’en est pas moins puissant, cela peut s’intégrer facilement avec les autres compétences dont je dispose et ça permet de libérer des blocages en profondeur et d’accéder à un bien être à la fois comportemental, physique, énergétique, émotionnel et spirituel.
            </p>
          <Button style="width: 30px; height: 30px" :icon=" moreLahochi ? 'pi pi-angle-down' : 'pi pi-angle-up'" class="p-button-rounded p-button-outlined p-button-secondary my-2"  @click="moreLahochi = !moreLahochi" />
        </TabPanel>
        <TabPanel header="Passage d’âmes">
            <p class="text-justify line-height-4 overflow-hidden" :style="moreAme ? 'max-height: 150px' : '' " >
              Généralement, quand on entend ce terme « passeur d’âmes », on pense à ceux qui font passer les défunts dans la lumière. C’est vrai, mais c’est incomplet. En réalité le passeur d’âme n’a pas pour « client » que des personnes défuntes, il peut également intervenir auprès des âmes qui sont sur le point de s’incarner (dans le ventre de la maman), des âmes qui viennent de s’incarner, qui sont déjà incarnées comme toi et moi ou qui sont en fin de vie. Également, si tu sens des énergies étranges dans ton lieu de vie, il est possible qu’il s’agisse d’un défunt et tu peux faire appel à moi pour vérifier cela et faire passer le défunt dans la lumière s’il y en a un, afin qu’il ne « t’embête » plus. 
              <br /> <br />
              Pendant l’incarnation, le rôle du passeur d’âme est d’aider les personnes à passer des étapes dans leurs vies et à retrouver leur chemin s’ils l’ont perdu. Pour cela il suffit parfois d’une simple discussion, d’un soin énergétique ou d’une séance d’EFT par exemple. Les thérapeutes, aides-soignants et infirmiers sont souvent (sans le savoir) des passeurs d’âmes. Certains clients souhaitent également rentrer en contact avec un ancêtre à eux car ils ont peut-être du mal à faire le deuil, à aller de l’avant. Cela rentre effectivement dans le domaine de compétence du passeur d’âmes, tant que l’éthique est respectée, qu’on demande les autorisations pour se connecter à eux et qu’on ne va pas les solliciter trop souvent.
            </p>
          <Button style="width: 30px; height: 30px" :icon=" moreAme ? 'pi pi-angle-down' : 'pi pi-angle-up'" class="p-button-rounded p-button-outlined p-button-secondary my-2"  @click="moreAme = !moreAme" />
        </TabPanel>
        <TabPanel header="Chamanisme" >
            <p class="text-justify line-height-4 overflow-hidden" :style="moreChaman ? 'max-height: 150px' : '' " >
              C’est quoi le chamanisme au juste ? On se fume un pétard et on part en trip ? Que nenni, c’est une croyance populaire que j’ai entendue quelques fois mais il n’y a aucune substance hallucinogène dans ce que je vais te proposer, je peux te l’assurer. Je suis en cours d’initiation alors ces séances ne sont pas encore disponibles et je ne peux pas te donner de date à laquelle elles seront disponibles mais je peux déjà t’informer sur les différentes manières de pratiquer l’art chamanique que je souhaiterai utiliser. 
              <br /> <br /> 
              D’une part, je te proposerai des voyages pour visiter des animaux totem, guides spirituels et autre alliés et d’autre part, je te proposerai de travailler sur du karmique et du transgénérationnel. Selon le type de voyage chamanique que je te propose, je peux ou non m’accompagner du tambour. Tu vas progressivement rentrer en état de conscience modifié (comme en hypnose ou en méditation par exemple) et tu pourras avoir des sons, des images, des émotions liées au type de voyage que tu auras choisi. 
              <br /> <br /> 
              Si tu choisis par exemple d’aller chercher l’origine d’une problématique à laquelle tu fais face actuellement, le fait de faire ce voyage chamanique et de recevoir ce soin associé t’aidera à transcender cette problématique et à t’en défaire progressivement; il est étonnant de remarquer à quel point les choses bougent en nous et autour de nous suite aux voyages que l’on peut faire (il en est de même pour les soins énergétiques). Aller à la rencontre d’un animal totem ou d’un autre allié pourra aussi t’être d’une aide précieuse dans ton quotidien quand tu choisiras de faire appel à lui à nouveau car, selon l’animal ou les animaux qui se présentent à toi, ils pourront t’apporter leurs qualités principales (courage, force, douceur, etc) quand tu en auras besoin et tu peux même demander à certains alliés de te faire un soin énergétique.
            </p>
          <Button style="width: 30px; height: 30px" :icon=" moreChaman ? 'pi pi-angle-down' : 'pi pi-angle-up'" class="p-button-rounded p-button-outlined p-button-secondary my-2"  @click="moreChaman = !moreChaman" />
        </TabPanel>
        <TabPanel header="Cartomancie">
            <p class="text-justify line-height-4 overflow-hidden" :style="moreCarto ? 'max-height: 150px' : '' " >
               Les cartes sont des outils qui matérialisent notre intuition et nos capacités médiumniques. Je les utilise pour recevoir des messages et permettre de conseiller au mieux le client sur la situation qu’il traverse. Cela lui permet aussi d’éclaircir certaines choses incomprises jusqu’alors et éventuellement de comprendre l’origine de sa problématique et par où commencer pour s’en défaire. Elles me servent à orienter et guider mes soins énergétiques et me permettent aussi de recevoir des messages plus clairs de la part des défunts, animaux totems, guides spirituels et autres alliés. 
               <br /> <br />
               Disclaimer : Je ne prédis pas l’avenir. L’avenir se crée par nos pensées et nos actions, si tu souhaites quelque chose dans ton futur proche ou lointain, travaille sur toi, sur tes résistances, tes fausses croyances et tes schémas répétitifs bloquants pour l’obtenir 😊
            </p>
          <Button style="width: 30px; height: 30px" :icon=" moreCarto ? 'pi pi-angle-down' : 'pi pi-angle-up'" class="p-button-rounded p-button-outlined p-button-secondary my-2"  @click="moreCarto = !moreCarto" />
        </TabPanel>
        <TabPanel header="Pendule">
            <p class="text-justify line-height-4 overflow-hidden" :style="morePendule ? 'max-height: 150px' : '' " >
               Le pendule est un outil de mesure qui permet d’obtenir des autorisations (avant de se connecter à quelqu’un, à un défunt par exemple) et des informations (à l’aide du « oui » ou « non » et des cadrans spécifiques déjà existants ou que j’aurais créés moi-même) sur le client et/ou sur sa situation. Demander des informations se fera toujours avec l’accord du client, dans le respect de son intimité. Tout comme les cartes, c’est un outil qui sert de canal à notre intuition et à nos capacités médiumniques.
            </p>
          <Button style="width: 30px; height: 30px" :icon=" morePendule ? 'pi pi-angle-down' : 'pi pi-angle-up'" class="p-button-rounded p-button-outlined p-button-secondary my-2"  @click="morePendule = !morePendule" />
        </TabPanel>
      </TabView>
  </div>
</template>

<script setup>

import {ref} from "@vue/reactivity";

let moreEFT = ref(true);
let moreDevPerso = ref(true);
let moreLahochi = ref(true);
let moreAme = ref(true);
let moreChaman = ref(true);
let moreCarto = ref(true);
let morePendule = ref(true);

</script>

<style scoped>

</style>