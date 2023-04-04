// Tenha cuidado ao reinicializar variáveis ​​dentro de um loop.

// Um problema potencial é quando as variáveis ​​devem ser reinicializadas e não são, ou vice-versa.

// Isso é particularmente perigoso se você redefinir acidentalmente a variável que está sendo usada para a condição do terminal, causando um loop infinito.

// A função a seguir deve criar uma matriz bidimensional com m linhas e n colunas de zeros. Corrija o código para que ele retorne uma matriz 3x2 correta de zeros, que se parece com [[0, 0], [0, 0], [0, 0]].

function zeroArray(m, n) {
    // Cria uma matriz 2-D com m linhas e n colunas de zeros
    let newArray = [];
    for (let i = 0; i < m; i++) {

        let row = [];

        for (let j = 0; j < n; j++) {  // Adiciona a m-ésima linha em newArray

            row.push(0);  // Coloca n zeros na linha atual para criar as colunas  // O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array
        }
        newArray.push(row); // Empurra a linha atual, que agora possui n zeros, para o array
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
