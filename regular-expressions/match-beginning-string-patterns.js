// Correspondência de padrões iniciais de string

// Além de usar o o caractere circunflexo (^) dentro de um conjunto de caracteres para criar um conjunto de caracteres negadoa, o ircunflexo (^) é usado também para procurar padrões no início de strings.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);