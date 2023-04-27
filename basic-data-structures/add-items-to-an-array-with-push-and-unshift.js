// Adicionar itens a um array com push() e unshift().

// O comprimento de um array, assim como os tipos de dados que ele pode conter, não é fixo.

// As matrizes podem ser definidas com um comprimento de qualquer número de elementos e os elementos podem ser adicionados ou removidos ao longo do tempo; ou seja, os arrays são mutáveis.

// O método push() recebe um ou mais elementos como parâmetros e adiciona elementos ao final de uma matriz.

// O método unshift() recebe um ou mais elementos como parâmetros e adiciona elementos ao início de uma matriz.

// Modifique a função usando push() e unshift() para adicionar 'I', 2, 'three' ao início da matriz e 7, 'VIII', 9 ao final para que a matriz retornada contenha representações dos números 1-9 em ordem.

function mixedNumbers(arr) {

    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9); 
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));