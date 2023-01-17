// Os grupos de captura são construídos colocando o padrão regex a ser capturado entre parênteses.

// A substring correspondente ao grupo é salva em uma "variável" temporária, que pode ser acessada dentro do mesmo regex usando uma barra invertida e o número do grupo de captura (por exemplo, \1).

// // o circunflexo (^) é usado também para procurar padrões no início de strings.

// O atalho para procurar caracteres de dígitos é \d, com um d minúsculo.

// Você pode pesquisar o final das strings usando o caractere cifrão $ no final do regex.

// Use grupos de captura em reRegex para corresponder a uma string que consiste apenas no mesmo número repetido exatamente três vezes, separados por espaços simples.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);