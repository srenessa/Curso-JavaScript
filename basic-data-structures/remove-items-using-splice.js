// Remover itens usando splice()

// O splice() serve para remover qualquer número de elementos consecutivos de qualquer lugar em um array.

// splice() pode receber até 3 parâmetros.

// Os dois primeiros parâmetros de splice() são inteiros que representam índices, ou posições, de itens no array para o qual splice() está sendo chamado.

// O primeiro parâmetro de splice() representa o índice no array do qual começar a remover elementos, enquanto o segundo parâmetro indica o número de elementos a serem excluídos.

/* Por exemplo: 
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2); 

Aqui removemos 2 elementos, começando com o terceiro elemento (no índice 2). array teria o valor ['today', 'was', 'great'].
*/

// splice() não apenas modifica o array em que está sendo chamado, mas também retorna um novo array contendo o valor dos elementos removidos.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];

console.log(arr);