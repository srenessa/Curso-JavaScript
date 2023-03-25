// Capturar parênteses, colchetes e aspas não fechados

// Todos os parênteses de abertura, colchetes, chaves e aspas têm um par de fechamento.

// Corrija os erros de dois pares no código.


// antes
/*
let myArray = [1, 2, 3;
    let arraySum = myArray.reduce((previous, current =>  previous + current);
    console.log(`Sum of array values is: ${arraySum}`);
    */

// depois

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);