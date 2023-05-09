// Iterar todos os itens de uma matriz usando loops For.

// O JavaScript oferece vários métodos integrados que iteram sobre arrays de maneiras ligeiramente diferentes para obter resultados diferentes (como every(), forEach(), map(), etc.)

// Porém, a técnica que é mais flexível e nos oferece a maior quantidade de controle é um loop for simples.

// Usando um loop for, essa função itera e acessa cada elemento do array e o submete a um teste simples que criamos.

// Definimos uma função, filterArray, que recebe arr, um array aninhado e elem como argumentos e retorna um novo array. elem representa um elemento que pode ou não estar presente em um ou mais arrays aninhados em arr. Modifique a função, usando um loop for, para retornar uma versão filtrada do array passado de forma que qualquer array aninhado em arr contendo elem tenha sido removido.

function filteredArray(arr, elem) {
    let newArr = [];
    


    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));