algoritmo "ResultadoFinalDeAno"

var
nome: caractere
nota1: real
nota2: real
nota3: real
nota4: real
media: real

inicio
    escreva("Digite seu nome: ")
    leia(nome)
    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)
    escreva("Digite a terceira nota: ")
    leia(nota3)
    escreva("Digite a quarta nota: ")
    leia(nota4)

    media <- (nota1 + nota2 + nota3 + nota4) / 4

    escreval("Nome: ", nome)
    escreval("Média: ", media)

    se media >= 7 entao
        escreval("Parabéns! Você foi aprovado.")
    senao
        escreval("Infelizmente, você foi reprovado.")
    fimse

fimalgoritmo