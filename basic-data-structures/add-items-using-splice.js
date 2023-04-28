// Adicionar itens usando splice()

// o terceiro parâmetro composto por um ou mais elemento(s) pode ser usado para adicionar ao array.

// Modifique a função usando splice() para remover os dois primeiros elementos da matriz e adicione 'DarkSalmon' e 'BlanchedAlmond' em seus respectivos lugares.

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');

    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));