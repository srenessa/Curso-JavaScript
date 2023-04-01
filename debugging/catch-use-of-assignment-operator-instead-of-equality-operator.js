// Pegar o uso do operador de atribuição em vez do operador de igualdade.



let x = 7;
let y = 9;
let result = "to come";

if (x = y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);