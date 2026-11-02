/*
algoritmo "testeEnquanto"

var
numero: inteiro

inicio
    numero <- 1
    enquanto numero <> 0 faca
        escreval("Digite um número para obter o seu quadrado (ou 0 para sair): ")
        leia(numero)
        se numero <> 0 entao
            escreval("O quadrado de ", numero, " é ", numero * numero)
        senao
            escreval("Saindo do programa.")
        fimse
    fimenquanto
fimalgoritmo
*/

const prompt = require('prompt-sync')();
let numero = 1;

while (numero !== 0) {
    numero = parseInt(prompt("Digite um número para obter o seu quadrado (ou 0 para sair): "));
    if (numero !== 0) {
        console.log("O quadrado de " + numero + " é " + (numero * numero));
    } else {
        console.log("Saindo do programa.");
    }
}