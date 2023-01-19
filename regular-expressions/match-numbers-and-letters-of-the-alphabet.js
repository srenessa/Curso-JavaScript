//O hífen (-) também funciona para corresponder a um intervalo de números
//[0-5]/ corresponde a qualquer número entre 0 e 5, incluindo 0 e 5.
//É possível combinar uma variedade de letras e números em um único conjunto de caracteres
// Por exemplo, /[a-z0-9]/ corresponde a qualquer letra de a até z, incluindo a letra a e a letra z, e corresponde também a qualquer número entre 0 e 9, incluindo 0 e 9.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result =  quoteSample.match(myRegex);

console.log(result);