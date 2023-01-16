// Lookaheads são padrões que dizem ao JavaScript para olhar adiante em sua string para verificar padrões mais adiante.

// Existem dois tipos de antecipação: antecipação positiva e antecipação negativa.

// Um lookahead positivo procurará certificar-se de que o elemento no padrão de pesquisa está lá, mas não corresponderá a ele.

// Um lookahead positivo é usado como (?=...) onde o ... é a parte necessária que não é correspondida.

// um lookahead negativo procurará garantir que o elemento no padrão de pesquisa não esteja lá. 

// Um lookahead negativo é usado como (?!...) onde o ... é o padrão que você não quer que esteja lá.

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);