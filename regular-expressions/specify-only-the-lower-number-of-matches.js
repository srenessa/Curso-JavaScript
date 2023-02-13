// Às vezes, você deseja especificar apenas o número inferior de padrões sem limite superior.

// Para especificar apenas o menor número de padrões, mantenha o primeiro número seguido por uma vírgula.

// Por exemplo, para corresponder apenas a string hah com a letra a aparecendo pelo menos 3 vezes, seu regex seria /ha{3,}h/.

// Altere o regex haRegex para corresponder à palavra Hazzah somente quando tiver quatro ou mais letras z.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);