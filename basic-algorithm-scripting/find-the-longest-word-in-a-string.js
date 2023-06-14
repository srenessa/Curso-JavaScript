// Encontre a palavra mais longa em uma string

// Retorna o comprimento da palavra mais longa na frase fornecida. Sua resposta deve ser um número.


function findLongestWordLength(str) {

    // Dividir uma frase em palavras 
    let separarPalavras = str.split(" ");

    let maiorQuantidadeDeLetras = 0;


    for (let i = 0; i < separarPalavras.length; i++) {
        let aux = separarPalavras[i].length;

        if (aux > maiorQuantidadeDeLetras) {
            maiorQuantidadeDeLetras = aux;
        }
    }

    return maiorQuantidadeDeLetras;

}

// passo 1: passar palavra por palavra

// passo 2: contar a quantidade de letra de cada palavra(usando length)

// passo 3: verificar qual palavra tem mais letras

// passo 4: retornar a quantidade de letra que tem a maior palavra 

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));