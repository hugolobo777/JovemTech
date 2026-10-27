Algoritmo "KanbanSimples"
Var
    tarefa: caractere
    estado: inteiro

Inicio
    Escreva("Digite a descricao da tarefa: ")
    Leia(tarefa)

    EscrevaL("Qual o estado atual da tarefa?")
    EscrevaL("1 - Nao iniciada")
    EscrevaL("2 - Em execucao")
    EscrevaL("3 - Finalizada")
    EscrevaL("4 - Travada/Com impedimento")
    Escreva("Digite o numero da opcao: ")
    Leia(estado)

    Se (estado = 1) Entao
        EscrevaL(tarefa, " -> A FAZER")
    Senao
        Se (estado = 2) Entao
            EscrevaL(tarefa, " -> EM ANDAMENTO")
        Senao
            Se (estado = 3) Entao
                EscrevaL(tarefa, " -> CONCLUIDO")
            Senao
                Se (estado = 4) Entao
                    EscrevaL(tarefa, " -> BLOQUEADO")
                Senao
                    EscrevaL("Opcao invalida")
                FimSe
            FimSe
        FimSe
    FimSe
Fimalgoritmo