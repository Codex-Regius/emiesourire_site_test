let dateNaissance = '13/08/1991';
let prenom = 'jérémy';
let prenom2= 'antoine';
let prenom3= '';
let prenom4= '';
let nom    = 'klauer';
let anneeEnCours = new Date().getFullYear().toString();

let jour  = dateNaissance.split('/')[0];
let mois  = dateNaissance.split('/')[1];
let annee = dateNaissance.split('/')[2];

let specialNumbers = [13, 14, 16, 19];
let SPECIAL = {
    cheminDeVie: 0,
    objectifDeVie: 0,
    realisation: 0,
    realisationPrenom: 0,
    realisationPrenom2: 0,
    realisationPrenom3: 0,
    realisationPrenom4: 0,
    realisationNom: 0,
    affectif: 0,
    affectifPrenom: 0,
    affectifPrenom2: 0,
    affectifPrenom3: 0,
    affectifPrenom4: 0,
    affectifNom: 0,
    cycleKarmique: 0
}

let voyelle = /a|e|i|o|u|y|é|è|ê|ö|ù|û|ü|î|ë|ô|ä|à|â|ï/g;
let consonnes = /b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z|ç/g

let tableauDeCorrespondance = {
    1 : ['a','j','s','é','è','ê','ç'],
    2 : ['b','k','t','ö'],
    3 : ['c','l','u','ù','û','ü'],
    4 : ['d','m','v'],
    5 : ['e','n','w','î','ë'],
    6 : ['f','o','x','ô','ä'],
    7 : ['g','p','y'],
    8 : ['h','q','z'],
    9 : ['i','r','à','â','ï']
};


const getSingleNumberFromDate = (date) => {

    let d = date.split('');
    let res = d.reduce((partialSum, a) => parseInt(partialSum) + parseInt(a));

    if(res > 9) return getSingleNumberFromDate(res.toString());

    return res;
}

const cheminDeVie = (jour, mois, annee) => {

    let d = getSingleNumberFromDate(jour);
    let m = getSingleNumberFromDate(mois);
    let y = getSingleNumberFromDate(annee);

    let res = d + m + y

    if( specialNumbers.includes( res ) ) {
        SPECIAL.cheminDeVie = res;
    }

    if(res > 9) {
        res = res.toString().split('').reduce((partialSum, a) => parseInt(partialSum) + parseInt(a));
    }

    if(res > 9) {
        res = res.toString().split('').reduce((partialSum, a) => parseInt(partialSum) + parseInt(a));
    }

    return res;

}

const objectifDeVie = (jour, mois) => {

    let d = getSingleNumberFromDate(jour);
    let m = getSingleNumberFromDate(mois);

    let res = d + m;

    if( specialNumbers.includes( res ) ) {
        SPECIAL.objectifDeVie = res;
    }

    if(res > 9) {
        res = res.toString().split('').reduce((partialSum, a) => parseInt(partialSum) + parseInt(a));
    }

    if(res > 9) {
        res = res.toString().split('').reduce((partialSum, a) => parseInt(partialSum) + parseInt(a));
    }

    return res;

}

const besoinDeRealisationOuAffectif = (prenom, prenom2, prenom3, prenom4, nom, replace) => {

    let p  = prenom.toLowerCase().replaceAll(replace ? voyelle : consonnes, '').split('');
    let p2 = prenom2.toLowerCase().replaceAll(replace ? voyelle : consonnes, '').split('');
    let p3 = prenom3?.toLowerCase().replaceAll(replace ? voyelle : consonnes, '').split('');
    let p4 = prenom4?.toLowerCase().replaceAll(replace ? voyelle : consonnes, '').split('');
    let n  = nom.toLowerCase().replaceAll(replace ? voyelle : consonnes, '').split('');
    let resP  = 0;
    let resP2 = 0;
    let resP3 = 0;
    let resP4 = 0;
    let resN  = 0;

    for (const i of Object.entries(tableauDeCorrespondance) ) {
        p.forEach(letter => {
            if(i[1].includes(letter)) {
                resP += parseInt(i[0])
            }
        });

        p2.forEach(num => {
            if(i[1].includes(num)) {
                resP2 += parseInt(i[0])
            }
        });

        p3?.forEach(num => {
            if(i[1].includes(num)) {
                resP3 += parseInt(i[0])
            }
        });

        p4?.forEach(num => {
            if(i[1].includes(num)) {
                resP4 += parseInt(i[0])
            }
        });

        n.forEach(num => {
            if(i[1].includes(num)) {
                resN += parseInt(i[0])
            }
        });
    }

    if( specialNumbers.includes(resP) ) replace ? SPECIAL.realisationPrenom = resP : SPECIAL.affectifPrenom = resP
    if( specialNumbers.includes(resP2) ) replace ? SPECIAL.realisationPrenom2 = resP2 : SPECIAL.affectifPrenom2 = resP2
    if( specialNumbers.includes(resP3) ) replace ? SPECIAL.realisationPrenom3 = resP3 : SPECIAL.affectifPrenom3 = resP3
    if( specialNumbers.includes(resP4) ) replace ? SPECIAL.realisationPrenom4 = resP4 : SPECIAL.affectifPrenom4 = resP4
    if( specialNumbers.includes(resN) ) replace ? SPECIAL.realisationNom = resN : SPECIAL.affectifNom = resN

    if(resP > 9) resP = getSingleNumberFromDate(resP.toString());
    if(resP2 > 9) resP2 = getSingleNumberFromDate(resP2.toString());
    if(resP3 > 9) resP3 = getSingleNumberFromDate(resP3.toString());
    if(resP4 > 9) resP4 = getSingleNumberFromDate(resP4.toString());
    if(resN > 9) resN = getSingleNumberFromDate(resN.toString());

    let total = resP + resP2 + resP3 + resP4 + resN;

    if( specialNumbers.includes(total) ) replace ? SPECIAL.realisation = total : SPECIAL.affectif = total
    if(total > 9) total = getSingleNumberFromDate(total.toString());

    return total;

}


const defis = (jour, mois, annee) => {

    let defi1 = Math.abs( getSingleNumberFromDate(jour) - getSingleNumberFromDate(mois) );
    let defi2 = Math.abs( getSingleNumberFromDate(jour) - getSingleNumberFromDate(annee) );
    let defi3 = Math.abs( defi1 - defi2 );
    let defi4 = Math.abs( getSingleNumberFromDate(mois) - getSingleNumberFromDate(annee) );

    return {
        'defi1' : defi1,
        'defi2' : defi2,
        'defi3' : defi3,
        'defi4' : defi4
    }

}

const anneeCycleKarmique = (jour, mois, anneeEnCours) => {

    let d = getSingleNumberFromDate(jour);
    let m = getSingleNumberFromDate(mois);
    let y = getSingleNumberFromDate(anneeEnCours);

    let res = d + m + y

    if( specialNumbers.includes( res ) ) {
        SPECIAL.cycleKarmique = res;
    }

    if(res > 9) {
        res = res.toString().split('').reduce((partialSum, a) => parseInt(partialSum) + parseInt(a));
    }

    if(res > 9) {
        res = res.toString().split('').reduce((partialSum, a) => parseInt(partialSum) + parseInt(a));
    }

    return res;

}

export {
    cheminDeVie,
    objectifDeVie,
    besoinDeRealisationOuAffectif,
    defis,
    anneeCycleKarmique,
    SPECIAL
}