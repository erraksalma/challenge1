var prompt = require('prompt-sync')();
let base=Number(prompt('entrer une base :'));
let exposant=Number(prompt('entrer un exposant :'));
let resultat=1;
for(let i=1;i<=exposant;i++){
    resultat*=base;
}
console.log('le résultat de ' + base + ' à la puissance ' + exposant + ' est : ' + resultat);
