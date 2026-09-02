var prompt = require('prompt-sync')();
let number=Number(prompt('entrer un nombre :'));
let resultat=1;
for(let i=1;i<=number;i++){
    resultat*=i;
}
console.log('la factorielle de ' + number + ' est : ' + resultat);