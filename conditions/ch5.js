var prompt = require('prompt-sync')();
let annee=Number(prompt('entrer un nombre annee :'));
console.log('menu');
console.log('1/ mois');
console.log('2/jours');
console.log('3/heure');
console.log('4/minute');
console.log('5/seconde');
let choix=Number(prompt('entrer votre choix :'));
if(choix==1){
    console.log('la durée est :' + annee * 12); 
}else if(choix==2){
    console.log('la durée est :' + annee * 365);
} else if(choix==3){
    console.log('la durée est :' + annee * 365 * 24);
} else if(choix==4){
    console.log('la durée est :' + annee * 365 * 24 * 60);
} else if(choix==5){
    console.log('la durée est :' + annee * 365 * 24 * 60 * 60);
}else{
    console.log('choix introuvable');
}
