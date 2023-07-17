function titleCase(str) {
    const palavras = titleCase.split("");

    for(let i = 0; i < palavras.length;i++ ){
        palavras[i]= palavras[i][0].toUpperCase();

    }
}

console.log(titleCase("I'm a little tea pot"));

// separar as palavras com split
// utilizar um for
// utilizamos o método toUpperCase() para converter uma string em letras maiúsculas.
