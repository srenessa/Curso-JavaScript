// Especifique o número exato de correspondências, ou seja, apenas um número específico de correspondências.

// Para especificar um certo número de padrões, basta colocar esse número entre as chaves.

// Por exemplo, para combinar apenas a palavra hah com a letra a 3 vezes, sua regex seria /ha{3}h/.

// Altere o regex timRegex para corresponder à palavra Timber somente quando ela tiver quatro letras m.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);

console.log(result);

