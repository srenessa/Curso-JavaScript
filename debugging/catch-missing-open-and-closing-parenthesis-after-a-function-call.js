// Capturar parênteses de abertura e fechamento ausentes após uma chamada de função.

// Quando uma função ou método não aceita nenhum argumento, você pode esquecer de incluir os parênteses de abertura e fechamento (vazios) ao chamá-lo.

// Muitas vezes, o resultado de uma chamada de função é salvo em uma variável para outro uso em seu código.

// Corrija o código para que o resultado da variável seja definido como o valor retornado da chamada da função getNine.


function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
console.log(result);