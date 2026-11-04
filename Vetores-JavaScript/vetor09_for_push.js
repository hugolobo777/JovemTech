const prompt = require('prompt-sync')(); // Importa a biblioteca prompt-sync para permitir a entrada de dados pelo usuário

let listaDeCompras = []; // cria um vetor vazio para armazenar os itens da lista de compras

// Leitura dos itens
for (let i = 0; i < 4; i++) { // percorre o vetor listaDeCompras, começando do índice 0 até 3 (total de 4 itens)
  let item = prompt(`Digite o ${i + 1}º item da lista: `); // solicita ao usuário que digite um item da lista de compras
  listaDeCompras.push(item); // adiciona o item digitado pelo usuário ao vetor listaDeCompras
}

// Exibição dos resultados
console.log("\n--- Sua Lista de Compras ---"); // imprime o título da lista de compras
for (let i = 0; i < listaDeCompras.length; i++) { // percorre o vetor listaDeCompras, começando do índice 0 até o tamanho do vetor usando a propriedade length.
  console.log(`${i + 1}. ${listaDeCompras[i]}`); // imprime cada item da lista de compras com seu respectivo número
}

console.log(`\nTotal de itens na lista: ${listaDeCompras.length}`); // imprime o total de itens na lista de compras, utilizando a propriedade length do vetor listaDeCompras  