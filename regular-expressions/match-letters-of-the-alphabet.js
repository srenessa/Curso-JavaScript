// Combinar Letras do Alfabeto
// Você pode definir um intervalo de caracteres para correspondência usando um hífen: -
// Para corresponder às letras minúsculas de a a e, você usaria [a-e]
// Para pesquisar ou extrair um padrão mais de uma vez, você pode usar o sinalizador de pesquisa global: g.
// Utilizaremos o sinalizador: i para ignorar maiúsculas e minúsculas.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex);

console.log(result);

