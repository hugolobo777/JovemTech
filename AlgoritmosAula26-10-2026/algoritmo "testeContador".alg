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