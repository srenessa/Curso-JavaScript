// Corresponde a caracteres que ocorrem zero ou mais vezes

// O caractere para fazer isso é o asterisco ou estrela: *

//  Em /go*/ - "gooooooooal!"; , "gut feeling"; ,  "over the moon"; - Em ordem, as três chamadas de correspondência retornariam os valores ["goooooooo"], ["g"] e nulo.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

console.log(result);
