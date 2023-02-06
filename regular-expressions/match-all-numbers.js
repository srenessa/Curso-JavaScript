// Outro padrão comum é procurar apenas dígitos ou números.

// O atalho para procurar caracteres de dígitos é \d, com um d minúsculo.

// Isso é igual à classe de caracteres [0-9], que procura um único caractere de qualquer número entre zero e nove.

// No caso de 2001, retornaria o numero 4 por ter quatro numeros.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;