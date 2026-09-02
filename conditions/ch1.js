var prompt = require('prompt-sync')();
let number=parseFloat(prompt('entrer un nombre :'));
if(number%2==0){
    console.log('le nombre est paire')
}else{
    console.log('le nombre est impaire');
}
