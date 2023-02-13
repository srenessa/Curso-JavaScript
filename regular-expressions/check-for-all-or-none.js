// Verifique se há todos ou nenhum.

 // Às vezes, os padrões que você deseja pesquisar podem ter partes que podem ou não existir. No entanto, pode ser importante verificá-los

// Você pode especificar a possível existência de um elemento com um ponto de interrogação, ?.

// Isso verifica se há zero ou um dos elementos anteriores. Você pode pensar neste símbolo como dizendo que o elemento anterior é opcional.

// Por exemplo, existem pequenas diferenças no inglês americano e britânico e você pode usar o ponto de interrogação para corresponder a ambas as grafias.

let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);

console.log(result);