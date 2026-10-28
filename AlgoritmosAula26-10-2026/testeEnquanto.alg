algoritmo "testeEnquanto"

var
numero: inteiro

inicio
    numero <- 1
    enquanto numero <> 0 faca
        escreval("Digite um número para obter o seu quadrado (ou 0 para sair): ")
        leia(numero)
        se numero <> 0 entao
            escreval("O quadrado de ", numero, " é ", numero * numero)
        senao
            escreval("Saindo do programa.")
        fimse
    fimenquanto
fimalgoritmo