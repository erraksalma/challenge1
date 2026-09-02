//Écrivez un programme qui demande la température en Celsius et la transforme en Kelvin. Formule :
//K = C + 273.15
var prompt = require('prompt-sync')();
let celsuis=parseFloat(prompt('entrer la temperature en celsuis'));
let kelvin=celsuis+273.15;
console.log('la temperature en kelvin est :' + kelvin);