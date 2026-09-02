var prompt = require('prompt-sync')();
let caractere=prompt('entrer une caractere :').toLowerCase();
switch(caractere){
    case 'a':    
    case 'e':
        
    case 'i':
        
    case 'o':
        
    case 'u':
        
    case 'y':
        console.log('la caractere est une voyelle');
        break;
    default:
        console.log('la caractere est une consonne');
}