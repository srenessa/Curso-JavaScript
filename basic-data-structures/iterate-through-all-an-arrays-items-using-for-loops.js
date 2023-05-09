// Iterar todos os itens de uma matriz usando loops For.

// O JavaScript tem vários métodos integrados para iterar arrays(como every(), forEach(), map(), etc.), mas um loop for simples é a técnica mais flexível e que oferece maior controle.

// Definimos uma função, filterArray, que recebe arr, um array aninhado e elem como argumentos e retorna um novo array. elem representa um elemento que pode ou não estar presente em um ou mais arrays aninhados em arr. Modifique a função, usando um loop for, para retornar uma versão filtrada do array passado de forma que qualquer array aninhado em arr contendo elem tenha sido removido.

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) { //Verifica todos os parâmetros do elemento e se NÃO estiver lá continua o código
            newArr.push(arr[i]); //Insere o elemento do array no novo array filtrado
        }
    }


    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));