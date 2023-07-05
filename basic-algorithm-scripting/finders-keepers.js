// Da linha 10(for) até a linha 11: Declaramos a variável de controle i e a inicializamos com 0. A condição de continuação do loop é i < arr.length, ou seja, enquanto i for menor que o tamanho do array, o loop continua. Em cada iteração do loop, atribuímos o valor do elemento atual do array (arr[i]) à variável num.

// Da linha 13(if) até 14: Dentro do loop, verificamos se a função func aplicada ao valor num é verdadeira (func(num)). Se for verdadeira, significa que o elemento passou no teste e retornamos o valor num.

// Linha 18: Se o loop terminar sem ter encontrado um elemento que passe no teste, a função retorna undefined para indicar que nenhum elemento foi encontrado.

function findElement(arr, func) {
    let num = 0;

    for(let i = 0; i < arr.length; i++){
        num = arr[i];

        if(func(num)){
            return num;
        }
    }

    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
//o resultado será o primeiro elemento par encontrado no array, que é 2.

// O que pede no exercício:
// Crie uma função que examine um array arr e retorne o primeiro elemento nele que passe em um 'teste de verdade'. Isso significa que, dado um elemento x, o 'teste de verdade' é aprovado se func(x) for verdadeiro. Se nenhum elemento passar no teste, retorna indefinido.