algoritmo "ResultadoFinalDeAno"

var
nome: caractere
nota1, nota2, nota3, nota4: real
contador: inteiro
opcao: inteiro

inicio

    escreval("Esse programa calcula a média final de todos os 30 alunos da turma.")
    escreval("")
    escreval("Escolha uma opção:")
    escreval("1 - Calcular a média final de todos os alunos da turma")
    escreval("2 - Sair do programa")
    escreval("")
    leia(opcao)
    se opcao = 1 entao
        escreval("Você escolheu calcular a média final de todos os alunos da turma.")
        para contador de 1 ate 5 faca
            escreva("Digite o nome do aluno: ")
            leia(nome)
            escreva("Digite a 1ª nota: ")
            leia(nota1)
            escreva("Digite a 2ª nota: ")
            leia(nota2)
            escreva("Digite a 3ª nota: ")
            leia(nota3)
            escreva("Digite a 4ª nota: ")
            leia(nota4)

            media <- (nota1 + nota2 + nota3 + nota4) / 4

            escreval("Nome: ", nome)
            escreval("Média: ", media)

            se media >= 7 entao
                escreval("Aluno aprovado!")
            senao
                escreval("Aluno reprovado!")
            fimse
        fimpara
    fimse

fimalgoritmo