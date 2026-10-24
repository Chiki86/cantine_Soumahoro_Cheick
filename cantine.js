const AttPoi = "attieke-poisson"
const RiPou = "Riz-poulet"
const AO = "attieke-oeuf"
let client = "Awa"
let quantite = "10"
let montantVersé = 10000
let codeDuplat = 2

// conversion
let quantitec = Number(quantite)
console.log(`client ${client},code du plat ${codeDuplat}, quantité ${quantitec}, montant versé ${montantVersé}`)
// Prix Unitaire
let p = 0 // p c'est ma variable pour le prix unitaire
if(codeDuplat === 1 ){
    p= 1500
    console.log(`${p} FCFA, ${AttPoi}`)
}
else if(codeDuplat === 2){
    p = 2000
    console.log(`${p} FCFA, ${RiPou}`)
}
else if(codeDuplat === 3){
    p = 1000
    console.log(`${p} FCFA, ${AO}`)
}
else{
    console.log(`code invalide`)
}

function calculerTotal(p,quantitec){ 
    return p * quantitec
}
const montantTotal = calculerTotal(p,quantitec)
console.log(montantTotal)