var prompt = require('prompt-sync')();
let number=Number(prompt('entrer un nombre :'));
let firstnumber=0;
let secondnumber=1;
let courant=0;
for(let i=1;i<=number;i++){
    console.log(firstnumber);

    courant=firstnumber+secondnumber;
    firstnumber=secondnumber;
    secondnumber=courant;
}   