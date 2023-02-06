// Correspondência de padrões iniciais de string

// Além de usar o  caractere circunflexo (^) dentro de um conjunto de caracteres para criar um conjunto de caracteres negados,  o caractere circunflexo se usado fora de um conjunto de caracteres,  serve para procurar padrões no início de strings.

// Por exemplo Ex - /^cal/é usado para procurar cal no inicio da string e - [âeiou] serve para negar todas as vogais.

// Nesse caso encontrará Cal no inicio da String

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);