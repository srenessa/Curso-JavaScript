let petString = "James has a pet cat.";
//Você pode pesquisar vários padrões usando a alternância ou o operador OR(OU): |
//Você também pode pesquisar mais do que apenas dois padrões. Você pode fazer isso adicionando mais padrões com mais operadores OR separando-os, como /yes|no|talvez/
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);