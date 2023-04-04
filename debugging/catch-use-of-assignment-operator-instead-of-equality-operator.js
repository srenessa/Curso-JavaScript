// Pegar o uso do operador de atribuição em vez do operador de igualdade.

// Programas de ramificação, ou seja, aqueles que fazem coisas diferentes se certas condições forem atendidas, dependem de instruções if, else if e else em JavaScript.

// Conforme abordado nos desafios anteriores, o operador de atribuição (=) em JavaScript atribui um valor a um nome de variável.

// E os operadores == e === verificam a igualdade (o triplo === testa a igualdade estrita, o que significa que o valor e o tipo são iguais).

// Corrija a condição para que o programa execute a ramificação direita e o valor apropriado seja atribuído ao resultado.


let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);