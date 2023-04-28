// Adicionar itens usando splice()

// o terceiro parâmetro composto por um ou mais elemento(s) pode ser usado para adicionar ao array.

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');

    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));