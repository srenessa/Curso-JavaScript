// Capturar argumentos passados ​​na ordem errada ao chamar uma função.

// O próximo bug a ser observado é quando os argumentos de uma função são fornecidos na ordem incorreta.

// Se os argumentos forem de tipos diferentes, como uma função que espera uma matriz e um número inteiro, isso provavelmente gerará um erro de tempo de execução.


function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);