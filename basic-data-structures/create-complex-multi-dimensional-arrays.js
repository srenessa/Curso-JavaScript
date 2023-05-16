// Crie matrizes multidimensionais complexas

// Um dos recursos mais poderosos ao pensar em arrays como estruturas de dados é que os arrays podem conter ou até mesmo ser completamente compostos de outros arrays.

// Os arrays podem conter uma profundidade infinita de arrays que podem conter outros arrays, cada um com seus próprios níveis arbitrários de profundidade e assim por diante.

// Dessa forma, um array pode rapidamente se tornar uma estrutura de dados muito complexa, conhecida como array multidimensional ou aninhado.

// A matriz profunda é aninhada em 2 níveis de profundidade. As matrizes mais profundas têm 3 níveis de profundidade. As matrizes mais profundas são de 4 níveis de profundidade e assim por diante.

// Podemos acessar facilmente os níveis mais profundos de uma matriz tão complexa com a notação de colchetes: console.log(nestedArray[2][1][0][0][0]);
// E agora que sabemos onde está esse dado, podemos redefini-lo se precisarmos: nestedArray[2][1][0][0][0] = 'deeper still';

let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]

  ];