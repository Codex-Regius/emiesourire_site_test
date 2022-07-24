/*!
 * templatePDF v1.0.0
 * (c) 2022 Martin Klauer
 * Released under the MIT License.
 */



export default function( post = {} ){

  console.log(post)

  return {
    /*
     userPassword: '123',
     ownerPassword: '123456',
     permissions: {
       printing: 'highResolution', //'lowResolution'
       modifying: false,
       copying: false,
       annotating: true,
       fillingForms: true,
       contentAccessibility: true,
       documentAssembly: true
    },*/
    info: {
      title: 'EmieSourire - Numérologie',
      author: 'Emilie Pinsard',
      subject:  'Numérologie',
      keywords: '',
      creator: 'EmieSourire',
      producer: 'EmieSourire' 
    },
    
    //pageSize: 'A4',
    pageSize: {
      width: 595.28,
      height: 841.89  
    },
    pageOrientation: 'portrait', // landscape || portrait,
    pageMargins: [20, 100, 20, 80],

    defaultStyle : {
      font: "Alegreya"
    },

    header: function(){
      return [
        {
          columns: [
            { text: 'Emiesourire', alignment: 'center', font:"AdamLight", fontSize: 30,margin: [0, 17]},
            { image: post.logo, width:80, alignment: 'center'}, 
            { text: "Compte rendu \n Numérologie", alignment: 'center',font:'Alegreya', fontSize: 20, margin: [0, 6]},
          ],
          margin: [0, 6],
          color: post.headerColor
        }
      ]

    },

    // Footer
    footer: function(currentPage, pageCount) {
      return [
        // {
        //   ul: [
        //     { text: "Coordonnées: ", alignment: 'left', listType:  'none', margin: [0, 0, 0, 3]},
        //     { text: 'Whatsapp : 07.67.32.28.67', alignment: 'left',listType:  'none', margin: [0, 0, 0, 2] },
        //     { text: 'Instagram : @emiesourire', alignment: 'left',listType:  'none', margin: [0, 0, 0, 2] },
        //   ],
        //   margin: [10, 25],
        //   fontSize: 10,
        //   color: 'black'
        // },
        { text: "Coordonnées: ", alignment: 'left', fontSize: 12 , margin: [10, 22, 0, 3]},
        {
          columns : [
            { image: post.whatsapp, width: 12, absolutePosition: {x: 10, y: 42} },
            { text: '07.67.32.28.67', fontSize: 10, absolutePosition: {x: 27, y: 40} },
          ]
        },
        {
          columns : [
            { image: post.instagram, width: 12, absolutePosition: {x: 10, y: 57} },
            { text: '@emiesourire', fontSize: 10, absolutePosition: {x: 27, y: 55} },
          ]
        },
        {
          columns : [
            { image: post.site, width: 12, absolutePosition: {x: 460, y: 42}},
            { text: 'emiesourire.fr', fontSize: 10, absolutePosition: {x: 477, y: 40}},
          ]
        },
        {
          columns : [
            { image: post.email, width: 12, absolutePosition: {x: 460, y: 57}},
            { text: 'emiesourire@gmail.com', fontSize: 10, absolutePosition: {x: 477, y: 55}},
          ]
        },
        { text: `${currentPage}/${pageCount}`, fontSize: 8, absolutePosition: {x: 580, y: 65}},
        // {
        //     ul: [
        //         { text: 'emiesourire.fr', alignment: 'right',listType:  'none', margin: [0, 0, 0, 2] },
        //         { text: 'emiesourire@gmail.com', alignment: 'right',listType:  'none',margin: [0, 0, 0, 0] },
        //         
        //     ],
        //     margin: [20, -60],
        //     fontSize: 10,
        //     color: 'black'
        // }
      ]
    },

    background: function ( currentPage, pageSize ) {
      // w: 595.28, h: 841.89
      return {
        canvas: [
          { type: 'rect', x: 0, y: 0, w: 595.28, h: 80, color: post.headerBackground },
          { type: 'rect', x:0, y: 781, w: 595.28, h: 60, color: post.footerBackground }
        ]
      };
    },


    content: [
      
      // Informations
      { text: `${post.prenom} ${post.prenom2}${' ' + post?.prenom3}${' ' + post?.prenom4} ${post.nom.toUpperCase()}`, alignment: 'center', margin: [0,0,0,5], fontSize: 18 },
      { text: `${post.dateNaissance}`, alignment: 'center', margin: [0,0,0,5], fontSize: 16 },
        
      { text: '', margin: [0, 10]},

      // Numérologie
      { text: `Chemin de vie  ${post.specialNumbers['cheminDeVie'] ? ': ' + post.specialNumbers['cheminDeVie'] : '' } `, alignment: 'left', margin: [0,5], fontSize: 15, decoration: 'underline' },
      { text: `${post.cheminDeVie} - ${post.texte_chemin_de_vie}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },

      { text: `Objectif de vie  ${post.specialNumbers['objectifDeVie'] ? ': ' + post.specialNumbers['objectifDeVie'] : '' } `, alignment: 'left', margin: [0,5], fontSize: 15, decoration: 'underline' },
      { text: `${post.objectifDeVie} - ${post.texte_objectif_de_vie}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },

      { text: `Images aux autres `, alignment: 'left', margin: [0,5], fontSize: 15, decoration: 'underline' },
      { text: `${post.texte_images_aux_autres[0][0]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `${post.texte_images_aux_autres[0][1][0]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `${post.texte_images_aux_autres[0][1][1]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `${post.texte_images_aux_autres[0][1][2]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      
      { text: "Besoin de réalisation" , alignment: 'left', margin: [0,5], fontSize: 15, decoration: 'underline' },
      { ul : [
          { text: `${post.specialNumbers['realisation'] ? 'Réalisation: ' + post.specialNumbers['realisation'] : '' }`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' },
          { text: `${post.specialNumbers['realisationPrenom'] ? 'Prénom: ' + post.specialNumbers['realisationPrenom'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }, 
          { text: `${post.specialNumbers['realisationPrenom2'] ? '2e Prénom: ' + post.specialNumbers['realisationPrenom2'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }, 
          { text: `${post.specialNumbers['realisationPrenom3'] ? '3e Prénom: ' + post.specialNumbers['realisationPrenom3'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }, 
          { text: `${post.specialNumbers['realisationPrenom4'] ? '4e Prénom: ' + post.specialNumbers['realisationPrenom4'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }, 
          { text: `${post.specialNumbers['realisationNom'] ? 'Nom: ' + post.specialNumbers['realisationNom'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }
        ],
      },
        
      { text: `${post.realisation} - ${post.texte_besoin_de_realisation}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },

      { text: "Besoin affectif", alignment: 'left', margin: [0,5], fontSize: 15, decoration: 'underline' },
      { ul : [
          { text: `${post.specialNumbers['affectif'] ? 'Affectif: ' + post.specialNumbers['affectif'] : '' }`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' },
          { text: `${post.specialNumbers['affectifPrenom'] ? 'Prénom: ' + post.specialNumbers['affectifPrenom'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }, 
          { text: `${post.specialNumbers['affectifPrenom2'] ? '2e Prénom: ' + post.specialNumbers['affectifPrenom2'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }, 
          { text: `${post.specialNumbers['affectifPrenom3'] ? '3e Prénom: ' + post.specialNumbers['affectifPrenom3'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }, 
          { text: `${post.specialNumbers['affectifPrenom4'] ? '4e Prénom: ' + post.specialNumbers['affectifPrenom4'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }, 
          { text: `${post.specialNumbers['affectifNom'] ? 'Nom: ' + post.specialNumbers['affectifNom'] : ''}`, listType: 'none', fontSize:12, margin: [-10, 0, 0, 0], color: 'grey' }
        ],
      },
      { text: `${post.affectif} - ${post.texte_besoin_affectif}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },

      { text: `Défis`, alignment: 'left', margin: [0,5], fontSize: 15, decoration: 'underline' },
      { text: `${post.defis[0]} - ${post.texte_defis[0]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `${post.defis[1]} - ${post.texte_defis[1]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `${post.defis[2]} - ${post.texte_defis[2]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `${post.defis[3]} - ${post.texte_defis[3]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },

      { text: `Année cycle karmique  ${post.specialNumbers['karmique'] ? ': ' + post.specialNumbers['karmique'] : '' } `, alignment: 'left', margin: [0,5], fontSize: 15, decoration: 'underline' },
      { text: `${post.karmique} - ${post.texte_karmique}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },

      { text: `NUMERO SPECIAL`, alignment: 'center', margin: [10,5], fontSize: 15, decoration: 'underline' },
      { text: `13 - ${post.texte_special_nombre[13]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `14 - ${post.texte_special_nombre[14]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `16 - ${post.texte_special_nombre[16]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },
      { text: `19 - ${post.texte_special_nombre[19]}`, alignment: 'left', margin: [0,5,0,15], fontSize: 12 },

    ]
  }

};