// Copiar uma matriz com o operador Spread

// O novo operador spread do ES6 nos permite copiar facilmente todos os elementos de um array, em ordem, com uma sintaxe simples e altamente legível.

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {

        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));