/* algoritmo "CompraDeCarro"

var
cor, fabricante: caractere
potencia, valor: real

inicio
    escreva("Informe a cor do automóvel: ")
    leia(cor)
    escreva("Informe a potência do motor (ex: 1.0, 1.4, 1.8): ")
    leia(potencia)
    escreva("Informe o fabricante: ")
    leia(fabricante)
    escreva("Informe o valor do automóvel: R$ ")
    leia(valor)

    se ((cor = "Azul") e (potencia = 1.8) e (fabricante = "Ford") e (valor <= 40000)) entao
        escreval("Compra aprovada!")
    senao
        escreval("Compra não aprovada.")
    fimse

fimalgoritmo
*/

const prompt = require('prompt-sync')();
let cor, fabricante;
let potencia, valor;

cor = prompt("Informe a cor do automóvel: ");
potencia = parseFloat(prompt("Informe a potência do motor (ex: 1.0, 1.4, 1.8): "));
fabricante = prompt("Informe o fabricante: ");
valor = parseFloat(prompt("Informe o valor do automóvel: R$ "));

if ((cor.toLowerCase() === "azul") && (potencia === 1.8) && (fabricante.toLowerCase() === "ford") && (valor <= 40000)) {
    console.log("Compra aprovada!");
} else {
    console.log("Compra não aprovada.");
}
