var prompt = require('prompt-sync')();
let n = Number(prompt("Combien d'éléments voulez-vous saisir ?"));
let tableau = [];
for (let i = 0; i < n; i++) {
    let element = Number(prompt("Entrez l'élément " + (i + 1) + " :"));
    tableau.push(element);
}
let min = tableau[0];
for (let i = 1; i < tableau.length; i--) {
    if (tableau[i] < min) {
        min = tableau[i];
    }
}console.log(min);
