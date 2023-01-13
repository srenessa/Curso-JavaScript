// Especifique o número superior e inferior de correspondências.

// Usa-se o sinal de mais + para procurar um ou mais caracteres e o asterisco * para procurar zero ou mais caracteres.

// Você pode especificar o número inferior e superior de padrões com especificadores de quantidade.

// Especificadores de quantidade são usados ​​com chaves ({ e }). Você coloca dois números entre as chaves - para o número inferior e superior de padrões.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);