// Use grupos de captura para pesquisar e substituir

// Você pode pesquisar e substituir texto em uma string usando .replace() em uma string.

// As entradas para .replace() são primeiro o padrão regex que você deseja procurar. 

// O segundo parâmetro é a string para substituir a correspondência ou uma função para fazer algo.

// Você também pode acessar os grupos de captura na string de substituição com cifrões ($).

// Escreva um regex fixRegex usando três grupos de captura que procurarão cada palavra na string um dois três. Em seguida, atualize a variável replaceText para substituir um dois três pela string três dois um e atribua o resultado à variável result.

// Certifique-se de estar utilizando grupos de captura na string de substituição usando a sintaxe de cifrão ($).

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);

