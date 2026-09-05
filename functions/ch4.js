var prompt = require('prompt-sync')();
let number1=Number(prompt('entrer premier nombre :'));
let number2=Number(prompt('entrer deuxieme nombre :'));

function min(number1,number2){
 if(number1<number2){
    console.log(number1 +'est le min');
 }   else console.log(number2 +'est le min');
}min(number1,number2);