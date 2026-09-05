var prompt = require('prompt-sync')();
let text = prompt('Entrer un message : ');
let i = 0;
let resultat = "";
while (text[i] !== undefined) {

    if (text[i] !== " ") {
        resultat = resultat + text[i];
    }

    i++;
}console.log(resultat);
