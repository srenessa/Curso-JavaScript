// Copiar uma matriz com o operador Spread

// O novo operador spread do ES6 nos permite copiar facilmente todos os elementos de um array, em ordem, com uma sintaxe simples e altamente legível.

// A sintaxe de propagação do operador Spread simplesmente se parece com isto: ...

// Definimos uma função, copyMachine, que recebe arr (um array) e num (um número) como argumentos. A função deve retornar uma nova matriz composta de num cópias de arr. Fizemos a maior parte do trabalho para você, mas ainda não está funcionando direito. Modifique a função usando a sintaxe de propagação para que funcione corretamente (dica: outro método que já abordamos pode ser útil aqui!).

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));