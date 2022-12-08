// Para criar um conjunto de caracteres negados, coloque um caractere de circunflexo (^) após o colchete de abertura e antes dos caracteres que não deseja corresponder.

//Por exemplo, /[^aeiou]/gi corresponde a todos os caracteres que não são vogais. 

// caracteres como ., !, [, @, / e espaço em branco são correspondidos, excluindo apenas vogais.

//Crie um único regex que corresponda a todos os caracteres que não sejam um número ou uma vogal. Lembre-se de incluir os sinalizadores apropriados no regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; 
let result = quoteSample.match(myRegex);

console.log(result);