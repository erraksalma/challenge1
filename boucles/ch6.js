var prompt = require('prompt-sync')();
let number=Number(prompt('entrer un nombre :'));
for(let i=1;i<=number;i++){
    if(i%2==0)
        console.log(i);
    }