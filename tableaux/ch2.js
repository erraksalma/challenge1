var prompt = require('prompt-sync')();
let n = Number(prompt("Combien d'éléments voulez-vous saisir ?"));
let tableau = [];
for (let i = 0; i < n; i++)
{
    let element = prompt("Entrez l'élément " + (i + 1) + " :");
    tableau.push(element);
}
    console.log("Les éléments du tableau sont :");
    for (let i = 0; i < tableau.length; i++) 
{
    console.log(tableau[i]);
}

