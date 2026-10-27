algoritmo "ResultadoDeVendas"

var
vendasJan, vendasFev, vendasMar, totalVendas: real

Inicio
    escreva("Digite o valor das vendas de Janeiro: ")
    leia(vendasJan)
    
    escreva("Digite o valor das vendas de Fevereiro: ")
    leia(vendasFev)
    
    escreva("Digite o valor das vendas de Março: ")
    leia(vendasMar)
    
    totalVendas <- (vendasJan + vendasFev + vendasMar)
    
    escreval("O total de vendas do trimestre é: ", totalVendas)

    se totalVendas > 17000 entao
        escreva("Parabéns! As vendas superaram a meta!")
    senao
        escreva("Infelizmente as vendas não atingiram a meta.")
    fimse
    
fimalgoritmo