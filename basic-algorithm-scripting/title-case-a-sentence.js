// Title Case a Sentence
// Retorne a string fornecida com a primeira letra de cada palavra em maiúscula. Certifique-se de que o restante da palavra esteja em letras minúsculas.

// Definindo uma função chamada titleCase que recebe uma string como entrada
function titleCase(str) {

     // Convertendo a string para letras minúsculas e dividindo em palavras
    let palavras = str.toLowerCase().split(" ");

     // Iniciando um loop para percorrer cada palavra da frase
    for (let i = 0; i < palavras.length; i++) {

         // Pegando a primeira letra de cada palavra
        const primeiraLetra = palavras[i][0];

         // Obtendo o código ASCII da primeira letra
        const primeiraLetraCodigoAscii = primeiraLetra.charCodeAt(0);

          // Verificando se a primeira letra é uma letra minúscula
        if (primeiraLetraCodigoAscii >= 97 && primeiraLetraCodigoAscii <= 122) {

              // Transformando a primeira letra em maiúscula e atualizando a palavra
            palavras[i] = palavras[i].replace(primeiraLetra, String.fromCharCode(primeiraLetraCodigoAscii - 32));
        }
    }

      // Juntando as palavras de volta em uma string e retornando o resultado
    return palavras.join(' ');
}

// Chamando a função titleCase com a frase "I'm a little tea pot" e exibindo o resultado
console.log(titleCase("I'm a little tea pot"));
