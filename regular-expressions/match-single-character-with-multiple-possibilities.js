// Combine um único personagem com múltiplas possibilidades.

// É o equilíbrio entre os dois extremos: padrões literais (/literal/) e caractere curinga (/./).

// Use uma classe de caracteres com vogais (a, e, i, o, u) em seu vogalRegex regex para encontrar todas as vogais na string quoteSample.

// Por exemplo, você deseja combinar bag, big e bug. Você pode criar o regex /b[aiu]g/ para fazer isso. O [aiu] é a classe de caracteres que corresponderá apenas aos caracteres a, i ou u.

// Para pesquisar ou extrair um padrão mais de uma vez, você pode usar o sinalizador de pesquisa global: g.

// Utilizaremos o sinalizador: i para ignorar maiúsculas e minúsculas.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 

console.log(result);