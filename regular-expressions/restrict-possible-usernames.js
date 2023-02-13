// Restringir possíveis nomes de usuáriokk

// Os únicos números no nome de usuário devem estar no final

// Pode haver zero ou mais deles no final.

// O nome de usuário não pode começar com o número.

// As letras do nome de usuário podem ser minúsculas e maiúsculas. 

// Os nomes de usuário devem ter pelo menos dois caracteres. Um nome de usuário de dois caracteres só pode usar letras do alfabeto como caracteres.

let username = "JackOfAllTrades";
let userCheck =  /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result = userCheck.test(username);

// 1 - ^ - início da entrada
// 2 - [a-z] - o primeiro caractere é uma letra
// 3 - [a-z]+ - os seguintes caracteres são letras
// 4 - \d*$ - a entrada termina com 0 ou mais dígitos
// 5 - | - ou
// 6 - ^[a-z] - primeiro caractere é uma letra
// 7 - \d\d+ - os seguintes caracteres são 2 ou mais dígitos
// 8 - $ - fim da entrada
// 9 - i -  ignorar maiúsculas e minúsculas.

