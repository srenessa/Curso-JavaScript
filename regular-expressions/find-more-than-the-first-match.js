//Para pesquisar ou extrair um padrão mais de uma vez, você pode usar o sinalizador de pesquisa global: g.
// Utilizaremos o sinalizador: i para ignorar maiúsculas e minúsculas.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 