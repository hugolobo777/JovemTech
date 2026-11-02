/*
algoritmo "ImpostoDeRenda"

var
nome: caractere
totalRendaAnual: real

inicio
escreval("Digite o nome do funcionário: ")
leia(nome)
escreval("Digite o total da renda anual do funcionário: ")
leia(totalRendaAnual)

se totalRendaAnual < 19000.00 entao
escreval("O funcionário ", nome, " não precisa pagar imposto de renda.")
senao
escreval("O funcionário ", nome, " precisa pagar imposto de renda.")

fimse

fimalgoritmo
*/

const prompt = require('prompt-sync')();
let nome;
let totalRendaAnual;

console.log("Digite o nome do funcionário: ");
nome = prompt();

console.log("Digite o total da renda anual do funcionário: ");
totalRendaAnual = parseFloat(prompt());

if (totalRendaAnual < 19000.00) {
    console.log(`O funcionário ${nome} não precisa pagar imposto de renda.`);
} else {
    console.log(`O funcionário ${nome} precisa pagar imposto de renda.`);
}