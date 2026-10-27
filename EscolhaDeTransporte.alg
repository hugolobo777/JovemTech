Algoritmo "EscolhaDeTransporte"

Var
passageiros: inteiro

inicio
    escreva("Informe o número total de passageiros: ")
    leia(passageiros)

    se passageiros <= 0 entao
        escreval("Número de passageiros inválido.")
    Senao
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
                        escreval("Número de passageiros excede a capacidade máxima de transporte.")
                    fimse
                fimse
            fimse
        fimse
    fimse
fimalgoritmo