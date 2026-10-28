algoritmo "algoritmoTesteRepita"

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