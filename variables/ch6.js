var prompt = require('prompt-sync')();
let A=parseFloat(prompt('entrer un nombre a :'));
let B=parseFloat(prompt('entrer un nombre b :'));
let somme=A+B;
let produit=A*B;
let difference=A-B;
let quotient=A/B;
console.log('la somme est :' +somme);
console.log('le produit est :' +produit);
console.log('la difference est :' +difference);
console.log('le quotient est :' +quotient);

