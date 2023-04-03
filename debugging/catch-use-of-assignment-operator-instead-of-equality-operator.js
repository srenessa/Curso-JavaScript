// Pegar o uso do operador de atribuição em vez do operador de igualdade.

// Conforme abordado nos desafios anteriores, o operador de atribuição (=) em JavaScript atribui um valor a um nome de variável.

// E os operadores == e === verificam a igualdade (o triplo === testa a igualdade estrita, o que significa que o valor e o tipo são iguais).



let x = 7;
let y = 9;
let result = "to come";

if (x = y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);