
var prompt = require('prompt-sync')();
let number=Number(prompt('entrer un nombre :'));
let res=0;
let m=0;
while(number>0){
    m=number%10;
    res*=10;
    res+=m;
    number=(number-m)/10;
}
console.log('le nombre inversé est : ' + res);