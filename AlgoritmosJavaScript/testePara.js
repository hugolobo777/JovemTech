/*
algoritmo "testeContador"

var
contador: inteiro
nome: caractere
idade: inteiro

inicio
    para contador de 1 ate 5 faca
        escreval("Qual o seu nome? ")
        leia(nome)
        escreval("Qual a sua idade? ")
        leia(idade)

        se idade >= 18 entao
            escreval(nome, ", você é maior de idade.")
        senao
            escreval(nome, ", você é menor de idade.")
        fimse
    fimpara
fimalgoritmo
*/

const prompt = require('prompt-sync')();
let contador, nome, idade;

for (contador = 1; contador <= 5; contador++) {
    nome = prompt("Qual o seu nome? "); //variavel nome recebe o valor digitado (prompt)
    idade = parseInt(prompt("Qual a sua idade? ")); //variavel idade recebe e transforma em inteiro o valor digitado 

    if (idade >= 18) {
        console.log(nome + ", você é maior de idade.");
    } else {
        console.log(nome + ", você é menor de idade.");
    } 
}