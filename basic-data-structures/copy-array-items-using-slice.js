// Copiar itens da matriz usando slice()

// Em vez de modificar um array, slice() copia ou extrai um determinado número de elementos para um novo array, deixando intocado o array para o qual é chamado.

// slice() leva apenas 2 parâmetros — o primeiro é o índice no qual iniciar a extração e o segundo é o índice no qual parar a extração(a extração ocorrerá até tal item, mas não será incluido o elemento neste índice)

// Modifique a função usando slice() para extrair informações do array de argumentos e retornar um novo array que contém os elementos de string warm e sunny.

// O  índice 2 é no qual inicia a extração(nesse caso o warm) e o índice 4 é onde para a extração(cool).

function forecast(arr) {
    return arr.slice(2,4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));