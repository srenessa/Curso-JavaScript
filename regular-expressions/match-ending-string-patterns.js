// Também existe uma maneira de procurar padrões no final das string

// Você pode pesquisar o final das strings usando o caractere cifrão $ no final do regex.

// Nesse caso o teste daria true, porque a ultima palavra da frase é caboose, passada no parametro de busca.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);