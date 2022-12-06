// caractere curinga: . / O curinga também é chamado de ponto
// Você pode usar o caractere curinga como qualquer outro caractere no regex. 
// Complete o regex unRegex para que corresponda às strings run, sun, fun, pun, nun e bun
// Dica: procurar um ponto em comum entre strings, nesse caso seria o "un"  e utilizamos o caractere curinga: . 

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);