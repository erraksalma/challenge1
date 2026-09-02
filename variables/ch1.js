//Écrivez un programme JavaScript qui permet d'afficher vos informations personnelles : 
// nom, prénom, âge, sexe et adresse e-mail. Les données sont saisies par l'utilisateur
var prompt = require('prompt-sync')();
let nom = prompt('Entrez votre nom : ');
let prnom = prompt('Entrez votre prenom : ');
let age = prompt('Entrez votre age : ');
let sex = prompt('Entrez votre sexe : ');
let adresse_email = prompt('Entrez votre adresse email : ');

console.log('nom:' + nom);
console.log('prnom:' + prnom);
console.log('age:' + age);
console.log('sex:' + sex);
console.log('adresse_email:' + adresse_email);