// Retornar os maiores números em matrizes

// Retorna um array que consiste no maior número de cada sub-array fornecido. Para simplificar, o array fornecido conterá exatamente 4 sub-arrays.

// Lembre-se, você pode iterar por meio de uma matriz com um loop for simples e acessar cada membro com a sintaxe da matriz arr[i].


function maiorDeQuatro(arr) {
    let resultMaiorNumero = [];

    for (let i = 0; i < arr.length; i++) {
        let maiorNumero = arr[i][0];

        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > maiorNumero) {
                maiorNumero = arr[i][j];
            }
        }

        resultMaiorNumero[i] = maiorNumero;
    }
    return resultMaiorNumero;
}

maiorNumero([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
