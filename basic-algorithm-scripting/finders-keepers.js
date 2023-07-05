function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];

        if (func(num)) {
            return num;
        }
    }
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// Crie uma função que examine um array arr e retorne o primeiro elemento nele que passe em um 'teste de verdade'. Isso significa que, dado um elemento x, o 'teste de verdade' é aprovado se func(x) for verdadeiro. Se nenhum elemento passar no teste, retorna indefinido.