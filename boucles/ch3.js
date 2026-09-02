var prompt = require('prompt-sync')();
let number=Number(prompt('entrer un nombre :'));
let resultat=0;
for(let i=1;i<=number;i++){
    resultat+=i;
}
console.log('la somme de 1 à ' + number + ' est : ' + resultat);