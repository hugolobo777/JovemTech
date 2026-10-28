algoritmo "CompraDeCarro"

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