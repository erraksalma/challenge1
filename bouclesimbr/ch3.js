const prompt = require("prompt-sync")();

let n = Number(prompt("Entrez un nombre : "));

while (n >= 0) {
    let premier = true;

    if (n < 2) {
        premier = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                premier = false;
                break;
            }
        }
    }

    if (premier) {
        console.log(n + " est premier");
    } else {
        console.log(n + " n'est pas premier");
    }

    n = Number(prompt("Entrez un autre nombre (nombre négatif pour arrêter) : "));
}