var prompt = require('prompt-sync')();
let number1=parseFloat(prompt('entrer premier nombre'));
let number2=parseFloat(prompt('entrer deuxieme nombre'));
let number3=parseFloat(prompt('entrer troisieme nombre'));

let total=((number1*2)+(number2*3)+(number3*5))/10;
console.log('la moyenne ponderee est :' +total);
