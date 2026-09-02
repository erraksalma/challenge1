//Écrivez un programme qui demande la distance en kilomètres et la transforme en yards. Formule :
//Yards = Km * 1093.61
var prompt = require('prompt-sync')();
let number=(prompt('entrer la distance en km'));
let yards=number*1093.61;
console.log('la distance en yards est :' +yards);
