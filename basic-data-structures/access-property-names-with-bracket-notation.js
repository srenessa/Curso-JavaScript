// Acessar nomes de propriedades com notação de colchetes

// No primeiro desafio de objeto, mencionamos o uso da notação de colchetes como forma de acessar valores de propriedade usando a avaliação de uma variável.

// A notação de colchetes é muito útil porque às vezes as propriedades do objeto não são conhecidas antes do tempo de execução ou precisamos acessá-las de maneira mais dinâmica.

// Definimos uma função, checkInventory, que recebe um item digitalizado como um argumento. Retorna o valor atual da chave scanItem no objeto alimentos. Você pode assumir que apenas chaves válidas serão fornecidas como um argumento para checkInventory.

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}

console.log(checkInventory("apples"));