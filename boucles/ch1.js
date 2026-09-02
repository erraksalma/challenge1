var prompt = require('prompt-sync')();
let number=Number(prompt('entrer un nombre :'));
for(let i=1;i<11;i++){
    console.log(number + ' x ' + i + ' = ' + (number*i));
}