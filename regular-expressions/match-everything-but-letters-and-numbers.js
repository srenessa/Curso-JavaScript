// Você pode procurar o oposto do \w com \W.

// Use a classe de caractere abreviada \W para contar o número de caracteres não alfanuméricos em várias aspas e strings(Os caracteres não alfanuméricos incluem os caracteres que não são letras ou dígitos, como + e @ .)

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;

