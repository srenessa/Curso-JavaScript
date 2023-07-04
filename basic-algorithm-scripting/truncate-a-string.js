// Truncar uma String

// significado: retirar uma parte de/ separar

// No javascript por exemplo, retorna a parte inteira de um número, descartando suas casas decimais

// Truncar uma string (primeiro argumento) se ela for maior que o comprimento máximo de string fornecido (segundo argumento). Retorne a string truncada com um final ....


// Essa função verifica se a string excede o comprimento máximo e se for necessário, trunca a string e adiciona "..." ao final. 

function truncateString(str, num) {
    if (str.length > num) {

        return str.slice(0, num) + "...";

    }
    return str;
    // resolveria também com a utilização do else{ return str;}

}



console.log(truncateString("A-tisket a-tasket A green and yellow basket", 10));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
