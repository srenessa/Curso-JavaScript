// Combine todas as letras e números

// A classe de caracteres mais próxima em JavaScript para corresponder ao alfabeto é \w (w minusculo).

// Este atalho é igual a [A-Za-z0-9_] ou seja, esta classe de caracteres corresponde a letras maiúsculas e minúsculas e números. 

// Essa classe de caracteres também inclui o caractere de sublinhado (_).

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 =  /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;