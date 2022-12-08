// Corresponde a caracteres que ocorrem uma ou mais vezes 

// Você pode usar o caractere + para verificar  a um caractere (ou grupo de caracteres) que aparece uma ou mais vezes seguidas

// Por exemplo, /a+/g encontraria uma correspondência em abc e retornaria ["a"]. Por causa do +, ele também encontraria uma única correspondência em aabc e retornaria ["aa"].

// Você deseja encontrar correspondências quando a letra s ocorre uma ou mais vezes no Mississippi

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; 
let result = difficultSpelling.match(myRegex);

console.log(result);