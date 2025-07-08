//Função: somar dois números

const readline = require('readline-sync');

let num1 = readline.question("Digite o primeiro numero para somar: ");
let num2 = readline.question("Digite o segundo numero para somar: ");

let soma = Number(num1) + Number(num2);

console.log("A soma dos numeros e: " + soma);