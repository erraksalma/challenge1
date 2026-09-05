var prompt = require('prompt-sync')();
let n=Number(prompt('entrer un nombre :'));

function  pairouimpair(n)
{

    if(n%2==0)
    {
        console.log("n est pair");
    }else console.log("n est impair");

} pairouimpair(n);
