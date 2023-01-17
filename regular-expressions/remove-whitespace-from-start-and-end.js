//  Remover o espaço em branco no início e no final da string.

// Escreva um regex e use os métodos de string apropriados para remover os espaços em branco no início e no final das strings, usando  expressões regulares.

let hello = "   Hello, World!  ";
let wsRegex =  /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, "");