const AttPoi = "attieke-poisson"
const RiPou = "Riz-poulet"
const AO = "attieke-oeuf"
let client = "Awa"
let quantite = "3"
let montantVersé = 1500
let codeDuplat = 6

// conversion
let quantitec = Number(quantite)
console.log(`client ${client},code du plat ${codeDuplat}, quantité ${quantitec}, montant versé ${montantVersé}`)
// Prix Unitaire
let p = 0 // p c'est ma variable pour le prix
if(codeDuplat === 1 ){
    console.log(p=`1500 FCFA, ${AttPoi}`)
}
else if(codeDuplat === 2){
    console.log(p=`2000 FCFA, ${RiPou}`)
}
else if(codeDuplat === 3){
    console.log(p=`1000 FCFA, ${AO}`)
}
else{
    console.log(`code invalide`)
}