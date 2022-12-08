// corresponde a caracteres que ocorrem zero ou mais vezes
// O caractere para fazer isso é o asterisco ou estrela: *

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

console.log(result);
