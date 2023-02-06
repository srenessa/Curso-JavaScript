// Corresponder a todos os não-números

// O atalho para procurar caracteres que não sejam dígitos é \D. Isso é igual à classe de caracteres [^0-9], que procura um único caractere que não seja um número entre zero e nove.

// Nesse caso retornaria o numero 17, por ter 17 letras e caracteres.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;

console.log(result)