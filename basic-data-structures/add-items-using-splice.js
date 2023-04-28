// Adicionar itens usando splice()

// o terceiro parâmetro composto por um ou mais elemento(s) pode ser usado para adicionar ao array.

// Modifique a função usando splice() para remover os dois primeiros elementos da matriz e adicione 'DarkSalmon' e 'BlanchedAlmond' em seus respectivos lugares.

// O índice no qual começar a excluir elementos (0), o número de elementos a serem excluídos (2) e os argumentos restantes ('DarkSalmon', 'BlanchedAlmond') serão inseridos a partir desse mesmo índice.

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');

    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));