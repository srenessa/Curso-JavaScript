// Title Case a Sentence

function titleCase(str) {

    const palavras = str.split(" ");
    console.log(palavras);

    for (let i = 0; i < palavras.length; i++) {
        console.log(palavras[i]);

        console.log(palavras[i][0]);

        if(str >= 'A' && str <= 'Z'){
            return String.fromCharCode(str.charCodeAt(0) + 32);
        }
    }

}

titleCase("I'm a little tea pot");




// Retorne a string fornecida com a primeira letra de cada palavra em maiúscula. Certifique-se de que o restante da palavra esteja em letras minúsculas. Para o propósito deste exercício, você também deve colocar palavras de ligação em maiúsculas como o e de.

// separar as palavras com split
// utilizar um for
// utilizamos o método toUpperCase() para converter uma string em letras maiúsculas.
