let numeros = [2, 3, 6]; //cria vetor com 3 elementos
let quadrados = []; //cria vetor vazio para armazenar os quadrados

for (let i = 0; i < numeros.length; i++) { //percorre o vetor numeros, começando do índice 0 até o tamanho do vetor usando a propriedade length.
quadrados.push(numeros[i] * numeros[i]); //calcula o quadrado de cada elemento e adiciona ao vetor quadrados
console.log(quadrados); //imprime o vetor quadrados a cada iteração
console.log(numeros.length) //imprime o tamanho do vetor numeros a cada iteração
}

