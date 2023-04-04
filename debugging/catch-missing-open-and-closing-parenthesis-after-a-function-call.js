// Capturar parênteses de abertura e fechamento ausentes após uma chamada de função.

// Quando uma função ou método não aceita nenhum argumento, você pode esquecer de incluir os parênteses de abertura e fechamento (vazios) ao chamá-lo.


function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
console.log(result);