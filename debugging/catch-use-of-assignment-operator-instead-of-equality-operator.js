// Pegar o uso do operador de atribuição em vez do operador de igualdade.

// Conforme abordado nos desafios anteriores, o operador de atribuição (=) em JavaScript atribui um valor a um nome de variável.



let x = 7;
let y = 9;
let result = "to come";

if (x = y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);