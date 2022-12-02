//Ignorar maiúsculas e minúsculas durante a correspondência
//Você pode combinar ambos os casos usando o que é chamado de sinalizador(nesse caso utilizaremos o sinalizador i)  que ignora maiúsculas e minúsculas.
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let result = fccRegex.test(myString);