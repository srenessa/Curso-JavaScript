// Correspondência de padrões iniciais de string

// Além de usar o  caractere circunflexo (^) dentro de um conjunto de caracteres para criar um conjunto de caracteres negados, o circunflexo (^) é usado também para procurar padrões no início de strings.

// Nesse caso encontrará call no inicio da String

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);