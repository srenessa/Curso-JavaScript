// Capturar argumentos passados ​​na ordem errada ao chamar uma função.

// O próximo bug a ser observado é quando os argumentos de uma função são fornecidos na ordem incorreta.


function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);