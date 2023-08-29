// Corte e Emenda

function frankenSplice(arr1, arr2, n) {
    // Criar uma cópia da segunda matriz arr2 para não alterar a matriz original(usando slice)
    NovaArr2 = arr2.slice();
    // Iterar pelos elementos da primeira matriz arr1(utilizando for)
    // Inserir cada elemento da primeira matriz no índice n da nova matriz newArr2(n: 1)
    // Incrementar o índice n para a próxima iteração(i++)
    // Retornar a nova matriz resultante( com o return)

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


// Você recebe dois arrays e um índice.
// Copie cada elemento da primeira matriz para a segunda matriz, em ordem.
// Comece inserindo elementos no índice n da segunda matriz.
// Retorne a matriz resultante. As matrizes de entrada devem permanecer as mesmas após a execução da função.

// Primeira matriz (array de entrada 1): [1, 2, 3]
// Segunda matriz (array de entrada 2): [4, 5, 6]
// n: 1

// deve retornar [4,1,2,3,5,6]