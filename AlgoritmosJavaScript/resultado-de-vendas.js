/*
algoritmo "ResultadoDeVendas"

var
vendasJan, vendasFev, vendasMar, totalVendas, maiorVenda: real

Inicio
    escreva("Digite o valor das vendas de Janeiro: ")
    leia(vendasJan)
    
    escreva("Digite o valor das vendas de Fevereiro: ")
    leia(vendasFev)
    
    escreva("Digite o valor das vendas de Março: ")
    leia(vendasMar)
    
    totalVendas <- (vendasJan + vendasFev + vendasMar)
    
    escreval("O total de vendas do trimestre é: ", totalVendas)

    maiorVenda <- vendasJan
    se vendasFev > maiorVenda entao
        maiorVenda <- vendasFev
    fimse
    se vendasMar > maiorVenda entao
        maiorVenda <- vendasMar
    fimse
    escreval("O maior valor de vendas entre os meses foi: ", maiorVenda)

    se totalVendas > 17000 entao
        escreva("Parabéns! As vendas superaram a meta!")
    senao
        escreva("Infelizmente as vendas não atingiram a meta.")
    fimse
    
fimalgoritmo
*/

let prompt = require('prompt-sync')();
let vendasJan, vendasFev, vendasMar, totalVendas, maiorVenda;

console.log("Digite o valor das vendas de Janeiro: ");
vendasJan = parseFloat(prompt());

console.log("Digite o valor das vendas de Fevereiro: ");
vendasFev = parseFloat(prompt());

console.log("Digite o valor das vendas de Março: ");
vendasMar = parseFloat(prompt());

totalVendas = (vendasJan + vendasFev + vendasMar);

console.log(`O total de vendas do trimestre é: ${totalVendas}`);

maiorVenda = vendasJan;
if (vendasFev > maiorVenda) {
    maiorVenda = vendasFev;
}
if (vendasMar > maiorVenda) {
    maiorVenda = vendasMar;
}
console.log(`O maior valor de vendas entre os meses foi: ${maiorVenda}`);

if (totalVendas > 17000) {
    console.log("Parabéns! As vendas superaram a meta!");
} else {
    console.log("Infelizmente as vendas não atingiram a meta.");
}