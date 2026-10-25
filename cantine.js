const AttPoi = "attieke-poisson"
const RiPou = "Riz-poulet"
const AO = "attieke-oeuf"
let client = "Awa"
let quantite = "2"
let montantVersé = 1000
let codeDuplat = 1

// conversion
let quantitec = Number(quantite)
console.log(`client ${client},code du plat ${codeDuplat}, quantité ${quantitec}, montant versé ${montantVersé}`)
// Prix Unitaire avec if/else
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
    console.log(`code invalide, on a pas plat pour ce code`)
}
// fonction
function calculerTotal(p,quantitec){ 
    return p * quantitec
}
const montantTotal = calculerTotal(p,quantitec)
console.log(`le montant total est : ${montantTotal}`)

// boucle for
console.log("Tableau recapitulatif")
for(let i = 1; i <=quantitec; i++){
    console.log(`portion ${i} : ${p} FCFA`);
}
console.log(`Client : ${client}`)
console.log(`Total : ${montantTotal} FCFA`);
let monnaie = montantVersé - montantTotal
if(monnaie >= 0){
    console.log(`la monnaie : ${monnaie} FCFA`)
}
else{
    console.log(`le montant manquant :${-monnaie} FCFA`)
}