function ehPar(numero) { // Cria função que verifica se um número é par
return numero % 2 === 0; // Retorna true se o número for par, caso contrário retorna false
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Cria um array de números de 1 a 10
let pares = numeros.filter(ehPar); // Usa o método filter para criar um novo array contendo apenas os números pares do array numeros, utilizando a função ehPar como callback
console.log(pares); // Imprime o array pares, que contém apenas os números pares do array numeros


