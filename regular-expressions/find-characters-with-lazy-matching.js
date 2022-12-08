// Encontrar caracteres com correspondência preguiçosa 

// Você pode aplicar o regex /t[a-z]*i/ à string "titanic". Este regex é basicamente um padrão que começa com t, termina com i e tem algumas letras no meio.

// você pode usar o ? caractere para alterá-lo para correspondência preguiçosa.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);