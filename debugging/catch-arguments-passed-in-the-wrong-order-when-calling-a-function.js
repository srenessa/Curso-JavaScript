// Capturar argumentos passados ​​na ordem errada ao chamar uma função.

// O próximo bug a ser observado é quando os argumentos de uma função são fornecidos na ordem incorreta.

// Se os argumentos forem de tipos diferentes, como uma função que espera uma matriz e um número inteiro, isso provavelmente gerará um erro de tempo de execução.

// Se os argumentos forem do mesmo tipo (todos inteiros, por exemplo), a lógica do código não fará sentido. 

// Certifique-se de fornecer todos os argumentos necessários, na ordem correta para evitar esses problemas.

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);