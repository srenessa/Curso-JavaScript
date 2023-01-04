// Combine todas as letras e números

// A classe de caracteres mais próxima em JavaScript para corresponder ao alfabeto é \w. 

// // Este atalho é igual a [A-Za-z0-9_] ou seja, esta classe de caracteres corresponde a letras maiúsculas e minúsculas e números. 
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 =  /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;