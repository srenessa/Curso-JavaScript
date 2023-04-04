// Tenha cuidado ao reinicializar variáveis ​​dentro de um loop.

// Um problema potencial é quando as variáveis ​​devem ser reinicializadas e não são, ou vice-versa.

// Isso é particularmente perigoso se você redefinir acidentalmente a variável que está sendo usada para a condição do terminal, causando um loop infinito.



function zeroArray(m, n) {
    // Cria uma matriz 2-D com m linhas e n colunas de zeros
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adiciona a m-ésima linha em newArray

        for (let j = 0; j < n; j++) {
            // Coloca n zeros na linha atual para criar as colunas
            // O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array
            row.push(0);
        }
        // Empurra a linha atual, que agora possui n zeros, para o array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
