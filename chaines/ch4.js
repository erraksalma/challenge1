var prompt = require('prompt-sync')();
let text1= prompt('entrer un message');
let text2= prompt('entrer un message');

if(text1===text2){
    console.log("sont egaux");

}else console.log("sont different");
