// Remova itens de um array com pop() e shift()

// Ambos push() e unshift() têm métodos correspondentes que são praticamente opostos funcionais: pop() e shift().

// pop() remove um elemento do final de um array, enquanto shift() remove um elemento do início.

// A principal diferença entre pop() e shift() e seus primos push() e unshift(), é que nenhum dos métodos aceita parâmetros e cada um permite apenas que uma matriz seja modificada por um único elemento por vez.

// Modifique a função, usando pop() e shift(), para remover o primeiro e o último elemento da matriz de argumentos e atribua os elementos removidos às suas variáveis ​​correspondentes, para que a matriz retornada contenha seus valores.


function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));