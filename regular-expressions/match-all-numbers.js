// Outro padrão comum é procurar apenas dígitos ou números.

// O atalho para procurar caracteres de dígitos é \d, com um d minúsculo.

// Isso é igual à classe de caracteres [0-9], que procura um único caractere de qualquer número entre zero e nove.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;