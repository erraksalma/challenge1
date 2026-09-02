//Écrivez un programme qui demande la vitesse en kilomètres par heure (km/h)
// et la transforme en mètres par seconde (m/s). Formule :
//m/s = km/h * 0.27778
var prompt = require('prompt-sync')();
let number=(prompt('entrer la distance en  km'));
let metre=number*0.27778;
console.log('la distance en metre est :' +metre+  'm/s');




