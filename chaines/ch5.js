var prompt = require('prompt-sync')();
let text = prompt('Entrer un message : ');
let i = 0;
while (text[i] !== undefined) {
    i++;
}
let resultat = "";
i--;

while (i >= 0) {
    resultat = resultat + text[i];
    i--;
}
console.log(resultat);
    