// Verifique a presença de um elemento com indexOf()

// Como os arrays podem ser alterados ou modificados a qualquer momento, não há garantia sobre onde um dado específico estará em um determinado array ou se esse elemento ainda existe.

// O indexOf nos permite verificar rápido e facilmente a presença de um elemento em um array.

// O indexOf() recebe um elemento como parâmetro e, quando chamado, retorna a posição ou índice desse elemento ou -1 se o elemento não existir no array.

/* POR EXEMEPLO: 
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

indexOf('dates') retorna -1(porque não existe esse elemento), indexOf('oranges') retorna 2 e indexOf('pears') retorna 1 (o primeiro índice no qual cada elemento existe).
*/

function quickCheck(arr, elem) {

}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));