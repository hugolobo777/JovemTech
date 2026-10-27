algoritmo "alg01"

var
idade: inteiro
dataNascimento: caractere
maiorIdade: logico
salario: real


inicio
    escreva("Digite sua idade: ")
    leia(idade)
    escreva("Digite sua data de nascimento (dd/mm/aaaa): ")
    leia(dataNascimento)
    escreva("Digite seu salário: ")
    leia(salario)

    escreval("Idade: ", idade)
    escreval("Data de Nascimento: ", dataNascimento)
    escreval("Salário: ", salario)

    se idade >= 18 entao
        escreval("Você é maior de idade.")
    senao
        escreval("Você é menor de idade.")
    fimse

    se salario > 0 entao
        escreval("Seu salário é: ", salario)
    senao
        escreval("Você não possui salário válido.")
    fimse

fimalgoritmo