// Combine Arrays com o Operador Spread

// Outra grande vantagem do operador spread é a capacidade de combinar arrays, ou inserir todos os elementos de um array em outro, em qualquer índice.

/* EXEMPLO
A sintaxe de propagação torna a seguinte operação extremamente simples:
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

thatArray teria o valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].
*/

// Definimos uma função spreadOut que retorna a variável sentença. Modifique a função usando o operador spread para que retorne o array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut());