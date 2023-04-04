// Tenha cuidado ao reinicializar variáveis ​​dentro de um loop.

// Um problema potencial é quando as variáveis ​​devem ser reinicializadas e não são, ou vice-versa.

// Isso é particularmente perigoso se você redefinir acidentalmente a variável que está sendo usada para a condição do terminal, causando um loop infinito.

function zeroArray(m, n) {
    // Cria uma matriz 2-D com m linhas e n colunas de zeros
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray

        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
