var prompt = require('prompt-sync')();
let number1=Number(prompt('entrer premier nombre :'));
let number2=Number(prompt('entrer deuxieme nombre :'));

function  produit(number1,number2){
    console.log(number1*number2);
}produit(number1,number2);