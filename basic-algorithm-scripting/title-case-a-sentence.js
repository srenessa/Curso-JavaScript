// CORRIGIR
// Title Case a Sentence

function titleCase(str) {
    const palavras = titleCase.split(" ");

    for(let i = 0; i < palavras.length; i++ ){
        palavras[i]= palavras[i][0].toUpperCase() + palavras[i].substr(1);

    }
    palavras.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Retorne a string fornecida com a primeira letra de cada palavra em maiúscula. Certifique-se de que o restante da palavra esteja em letras minúsculas. Para o propósito deste exercício, você também deve colocar palavras de ligação em maiúsculas como o e de.

// separar as palavras com split
// utilizar um for
// utilizamos o método toUpperCase() para converter uma string em letras maiúsculas.
