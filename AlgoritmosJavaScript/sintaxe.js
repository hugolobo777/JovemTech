const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite sua idade: "));
let nome = prompt("Digite seu nome: ");

if (idade >= 18) {
    console.log(`Olá ${nome}, você é maior de idade.`); //console.log("Olá " + nome + ", você é maior de idade.");
} else {
    console.log(`Olá ${nome}, você é menor de idade.`); //console.log("Olá " + nome + ", você é menor de idade.");
}

console.log("");
console.log("Seu nome é: " + nome);
console.log("Sua idade é: " + idade);
console.log("");
console.log("Fim do programa.");