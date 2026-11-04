let vogais = ["a", "e", "i", "o", "u"]; // cria vetor com 5 elementos

for (let index in vogais) { // percorre o vetor vogais, usando a estrutura for...in para iterar sobre os índices do vetor
console.log(`índice ${index}: ${vogais[index]}`); // Em template string, imprime o índice e o valor correspondente do vetor vogais a cada iteração
}
