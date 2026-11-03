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

for (let i = 0; i < 5; i++) {

    nome = prompt("Digite o nome do funcionário: ");

    totalRendaAnual = parseFloat(prompt("Digite o total da renda anual do funcionário: "));

    if (totalRendaAnual < 19000.00) {
        console.log(`O funcionário ${nome} não precisa pagar imposto de renda.`);
    } else {
        console.log(`O funcionário ${nome} precisa pagar imposto de renda.`);
    }
}