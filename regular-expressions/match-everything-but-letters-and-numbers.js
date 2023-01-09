// Você pode procurar o oposto do \w com \W.

// // Use a classe de caractere abreviada \W para contar o número de caracteres não alfanuméricos em várias aspas e strings

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

