var prompt = require('prompt-sync')();
let a=parseFloat(prompt('entrer premier nombre'));
let b=parseFloat(prompt('entrer deuxieme nombre'));
let c=parseFloat(prompt('entrer troisieme nombre'));
let moyenne_geometrrique=(a*b*c)**(1/3);
console.log('la moyenne geometrrique est :' +moyenne_geometrrique);