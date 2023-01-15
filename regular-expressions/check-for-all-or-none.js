// Verifique se há todos ou nenhum.

// // Às vezes, os padrões que você deseja pesquisar podem ter partes que podem ou não existir. No entanto, pode ser importante verificá-los

// Você pode especificar a possível existência de um elemento com um ponto de interrogação, ?.|

let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);

