// Os únicos números no nome de usuário devem estar no final

// Pode haver zero ou mais deles no final.

// O nome de usuário não pode começar com o número.

// As letras do nome de usuário podem ser minúsculas e maiúsculas. 

// Os nomes de usuário devem ter pelo menos dois caracteres. Um nome de usuário de dois caracteres só pode usar letras do alfabeto como caracteres.

let username = "JackOfAllTrades";
let userCheck =  /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result = userCheck.test(username);

// O circunflexo (^) é usado também para procurar padrões no início de strings

 // Você pode definir um intervalo de caracteres para correspondência usando um hífen: -, ou seja de a a z

 // O atalho para procurar caracteres de dígitos é \d, com um d minúsculo.

// Você pode pesquisar o final das strings usando o caractere cifrão $ no final do regex.

// Utilizaremos o sinalizador: i para ignorar maiúsculas e minúsculas.


