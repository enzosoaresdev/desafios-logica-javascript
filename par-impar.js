//Verificar se o número é par ou impar

const readline = require('readline-sync');

let num = readline.question("Digite um número: ");

if (num%2==0){

     console.log("Par");

} else {
    console.log("impar");
}