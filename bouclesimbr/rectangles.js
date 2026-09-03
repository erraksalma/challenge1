var prompt = require('prompt-sync')();
let num=Number(prompt('entrer un nombre :'));

function pyramide(m){
for(let i=0;i<=m;i++){
    let ligne=('');
    for(let space=0;space<m-i;space++) {
        ligne=ligne+' ';
    }
    for(let j=0;j<i*2-1;j++)
    {
     ligne=ligne+'*';
    }
    console.log(ligne);
} 
}
pyramide(num);




