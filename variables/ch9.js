var prompt = require('prompt-sync')();
let x1=2,y1=3,z1=4;
let x2=4,y2=6,z2=8;

let differenceX2=(x2-x1)**2;
let differenceY2=(y2-y1)**2;
let differenceZ2=(z2-z1)**2;

let somme=differenceX2+differenceY2+differenceZ2;
let distance=Math.sqrt(somme);
console.log('la distance entre les deux points est :' +distance);
