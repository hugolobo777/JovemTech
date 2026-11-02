/*
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
*/

const prompt = require('prompt-sync')();
let nome;
let nota1, nota2, nota3, nota4;
let contador;
let opcao;

console.log("Esse programa calcula a média final de todos os 30 alunos da turma.");
console.log("");
console.log("Escolha uma opção:");
console.log("1 - Calcular a média final de todos os alunos da turma");
console.log("2 - Sair do programa");
console.log("");
opcao = parseInt(prompt());

if (opcao === 1) {
    console.log("Você escolheu calcular a média final de todos os alunos da turma.");
    for (contador = 1; contador <= 5; contador++) {
        console.log(`Digite o nome do aluno ${contador}: `);
        nome = prompt();
        console.log("Digite a 1ª nota: ");
        nota1 = parseFloat(prompt());
        console.log("Digite a 2ª nota: ");
        nota2 = parseFloat(prompt());
        console.log("Digite a 3ª nota: ");
        nota3 = parseFloat(prompt());
        console.log("Digite a 4ª nota: ");
        nota4 = parseFloat(prompt());

        let media = (nota1 + nota2 + nota3 + nota4) / 4;

        console.log(`Nome: ${nome}`);
        console.log(`Média: ${media}`);

        if (media >= 7) {
            console.log("Aluno aprovado!");
        } else {
            console.log("Aluno reprovado!");
        }
    }
}

