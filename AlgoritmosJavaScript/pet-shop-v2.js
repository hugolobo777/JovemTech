const prompt = require('prompt-sync')();

// Cada índice corresponde a um cadastro.
let nomesPets = [];
let nomesDonos = [];
let servicos = [];
let opcao = "";

// O laço repete até que o usuário digite "4"
while (opcao !== "4") {
  console.log("\n=== PET SHOP AMIGO FIEL ===\n");
  console.log("1 - Cadastrar pet");
  console.log("2 - Listar todos os pets");
  console.log("3 - Buscar por nome do dono");
  console.log("4 - Sair\n");
  opcao = prompt("Digite o número da opção desejada: ");

  // 1. CADASTRAR
  if (opcao === "1") {
    console.log("");
    let pet = prompt("Nome do pet: ");
    let dono = prompt("Nome do dono: ");
    let servico = prompt("Serviço agendado: ");

    nomesPets.push(pet);
    nomesDonos.push(dono);
    servicos.push(servico);

    console.log(`\nPet ${pet} cadastrado com sucesso!`);
  }

  // 2. LISTAR TODOS
  else if (opcao === "2") {
    console.log("\n--- LISTA DE PETS ---");
    for (let i = 0; i < nomesPets.length; i++) {
      console.log(`Pet: ${nomesPets[i]} | Dono: ${nomesDonos[i]} | Serviço: ${servicos[i]}`);
    }
  }

  // 3. Buscar pelo dono
  else if (opcao === "3") {
    let busca = prompt("\nNome do dono: ");
    let achou = false;

    console.log(`\n--- RESULTADOS PARA "${busca}" ---`);
    for (let i = 0; i < nomesDonos.length; i++) {
      if (nomesDonos[i] === busca) {
        console.log("Encontrado: " + nomesPets[i] + " | Serviço: " + servicos[i]);
        achou = true;
      }
    }

    if (achou === false) {
      console.log("Dono não encontrado!");
    }
  }

  // 4. SAIR
  else if (opcao === "4") {
    console.log("\nSaindo do sistema!");
  }

  // OPÇÃO INVÁLIDA
  else {
    console.log("\nOpção inválida! Escolha de 1 a 4.");
  }
}
