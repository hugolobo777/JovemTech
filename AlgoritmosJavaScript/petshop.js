let pets = [];
let executando = true;

while (executando) {
  let opcao = prompt(
    "=== SISTEMA DE GESTÃO PETSHOP AMIGO FIEL ===\n" +
    "1 - Cadastrar novo pet\n" +
    "2 - Listar todos os pets\n" +
    "3 - Buscar pet pelo nome do dono\n" +
    "4 - Sair\n\n" +
    "Escolha uma opção (1 a 4):"
  );
  