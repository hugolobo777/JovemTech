
let nomesPets = [];
let nomesDonos = [];
let servicos = [];

let opcao = "";

// O laço continua repetindo até que o usuário digite "4"
while (opcao !== "4") {
  opcao = prompt(
    "=== PET SHOP ===\n" +
    "1 - Cadastrar pet\n" +
    "2 - Listar todos os pets\n" +
    "3 - Buscar por nome do dono\n" +
    "4 - Sair\n\n" +
    "Digite o número da opção desejada:"
  );

  // 1. CADASTRAR
  if (opcao === "1") {
    let pet = prompt("Nome do pet:");
    let dono = prompt("Nome do dono:");
    let servico = prompt("Serviço agendado:");

    // Guarda cada informação no seu respectivo vetor
    nomesPets.push(pet);
    nomesDonos.push(dono);
    servicos.push(servico);

    alert("Cadastrado com sucesso!");
  }

  // 2. LISTAR TODOS
  else if (opcao === "2") {
    if (nomesPets.length === 0) {
      alert("Nenhum pet cadastrado!");
    } else {
      let mensagem = "--- LISTA DE PETS ---\n\n";

      // Percorre os vetores do índice 0 até o final
      for (let i = 0; i < nomesPets.length; i++) {
        mensagem += "Pet: " + nomesPets[i] + 
                    " | Dono: " + nomesDonos[i] + 
                    " | Serviço: " + servicos[i] + "\n";
      }

      alert(mensagem);
    }
  }

  // 3. BUSCAR POR DONO
  else if (opcao === "3") {
    if (nomesPets.length === 0) {
      alert("Ainda não há pets para buscar.");
    } else {
      let busca = prompt("Digite o nome do dono que quer procurar:");
      let encontrou = false;
      let resultado = "--- RESULTADOS ENCONTRADOS ---\n\n";

      // Percorre o vetor de donos comparando com o nome digitado
      for (let i = 0; i < nomesDonos.length; i++) {
        if (nomesDonos[i] === busca) {
          resultado += "Pet: " + nomesPets[i] + 
                       " | Dono: " + nomesDonos[i] + 
                       " | Serviço: " + servicos[i] + "\n";
          encontrou = true;
        }
      }

      // Verifica se achou alguém
      if (encontrou === true) {
        alert(resultado);
      } else {
        alert("Nenhum cadastro encontrado com o dono: " + busca);
      }
    }
  }

  // 4. SAIR
  else if (opcao === "4") {
    alert("Saindo do sistema...");
  }

  // OPÇÃO INVÁLIDA
  else {
    alert("Opção inválida! Escolha de 1 a 4.");
  }
}
