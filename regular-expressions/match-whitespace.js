// Você pode procurar espaços em branco usando \s, que é um s minúsculo.
// Esse padrão não apenas corresponde a espaços em branco, mas também a caracteres de retorno de carro, tabulação, alimentação de formulário e nova linha

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);

console.log(result);