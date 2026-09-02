//Écrivez un programme qui demande la température en Celsius et affiche l'état de l'eau à cette température (solide, liquide, gaz).
//  Règle :
// C < 0 : Solide
// 0 <= C < 100 : Liquide
// C >= 100 : Gaz
var prompt = require('prompt-sync')();
let saisie=prompt('entrer la temperature en celsuis');
let temp=parseFloat(saisie);
if (temp<0){
    console.log('solide');
}else if (temp>=0 && temp<100){
    console.log('liquide');
}else{
    console.log('gaz');
}


