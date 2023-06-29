// ENTENDER MELHOR

// Retornar os maiores números em matrizes

// Retorna um array que consiste no maior número de cada sub-array fornecido. Para simplificar, o array fornecido conterá exatamente 4 sub-arrays.

// Lembre-se, você pode iterar por meio de uma matriz com um loop for simples e acessar cada membro com a sintaxe da matriz arr[i].

function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}