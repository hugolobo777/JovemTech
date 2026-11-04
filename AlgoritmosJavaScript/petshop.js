let pets = [];
let executando = true;

while (executando) {
  let opcao = prompt(
    "=== SISTEMA DE GESTÃO PETSHOP AMIGO FIEL ===\n" +
    "1 - Cadastrar novo pet\n" + //Hugo
    "2 - Listar todos os pets\n" + //Jean
    "3 - Buscar pet pelo nome do dono\n" + //Renata
    "4 - Sair\n\n" +
    "Escolha uma opção (1 a 4):"
  );

  // 1. CADASTRAR NOVO PET
  if (opcao === "1") {
    let nomePet = prompt("Digite o nome do pet:");
    let nomeDono = prompt("Digite o nome do dono:");
    let servico = prompt("Digite o serviço (ex: Banho e tosa, Consulta):");

    // Validação simples
    if (nomePet && nomeDono && servico) {
      // Cria o objeto e adiciona na última posição do vetor com .push()
      let novoCadastro = {
        pet: nomePet,
        dono: nomeDono,
        servico: servico
      };
      pets.push(novoCadastro);
      alert("Pet " + nomePet + " cadastrado com sucesso!");
    } else {
      alert("Preencha todos os campos para cadastrar.");
    }
  }
}
