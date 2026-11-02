/*algoritmo "algoritmoTesteRepita"

var
numero, soma: inteiro

inicio

    soma <- 0
    repita
        escreval("Digite um número para ser somado (ou 0 para sair): ")
        leia(numero)
        soma <- soma + numero
        escreval("A soma dos números digitados é: ", soma)
    ate numero = 0

fimalgoritmo
*/
const prompt = require('prompt-sync')();
let numero, soma;

soma = 0;

do {
    numero = parseInt(prompt("Digite um número para ser somado (ou 0 para sair): ")); //variável numero recebe o que for digitado e transforma em inteiro pelo usuário
    soma += numero;
    console.log("A soma dos números digitados é: " + soma);
}
while (numero !== 0);
