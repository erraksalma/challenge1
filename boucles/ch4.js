var prompt = require('prompt-sync')();
let number=Number(prompt('entrer un nombre :'));
let number1=number* 2 ;
for(let i=1;i<=number1;i++)
    if(i%2!=0){
        console.log(i);
    }
    
