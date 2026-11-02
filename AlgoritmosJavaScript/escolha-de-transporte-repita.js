/*
Algoritmo "EscolhaDeTransporteV2"

Var
    passageiros: inteiro

inicio
escreval("Este programa ajuda a escolher o tipo de transporte adequado com base no número de passageiros.")
escreval("")
    repita
        escreva("Informe o total de passageiros (ou 0 para sair): ")
        leia(passageiros)

        se passageiros > 0 entao
            se passageiros <= 4 entao
                escreval("Você pode escolher um carro de passeio.")
            senao
                se passageiros <= 8 entao
                    escreval("Você pode escolher uma Mini Van.")
                senao
                    se passageiros <= 16 entao
                        escreval("Você pode escolher uma Van.")
                    senao
                        se passageiros <= 40 entao
                            escreval("Você pode escolher um ônibus.")
                        senao
                            escreval("Número excede a capacidade máxima.")
                        fimse
                    fimse
                fimse
            fimse
        senao
            se passageiros < 0 entao
                escreval("Número de passageiros inválido.")
            fimse
        fimse
        escreval("")
    ate passageiros = 0

fimalgoritmo
*/

const prompt = require('prompt-sync')();
let passageiros;

console.log("Este programa ajuda a escolher o tipo de transporte adequado com base no número de passageiros.");
console.log("");

do {
    passageiros = parseInt(prompt("Informe o total de passageiros (ou 0 para sair): "));

    if (passageiros > 0) {
        if (passageiros <= 4) {
            console.log("Você pode escolher um carro de passeio.");
        } else if (passageiros <= 8) {
            console.log("Você pode escolher uma Mini Van.");
        } else if (passageiros <= 16) {
            console.log("Você pode escolher uma Van.");
        } else if (passageiros <= 40) {
            console.log("Você pode escolher um ônibus.");
        } else {
            console.log("Número excede a capacidade máxima.");
        }
    } else if (passageiros < 0) {
        console.log("Número de passageiros inválido.");
    }

    console.log("");
} while (passageiros !== 0);