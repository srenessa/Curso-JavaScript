// Use a palavra-chave delete para remover as propriedades do objeto

// Os objetos são armazenamentos de valor-chave que fornecem uma maneira flexível e intuitiva de estruturar dados e fornecem um tempo de pesquisa muito rápido.

// Em desafios anteriores, adicionamos e modificamos os pares chave-valor de um objeto. Aqui veremos como podemos remover um par chave-valor de um objeto.

// Para remover deve-se utilizar o comando delete, seguido do nome do objeto e por fim utilizaremos a propriedade que queremos remover do objeto. Por exemplo: delete foods.apples;

// Use a palavra-chave delete para remover as chaves oranges, plums e strawberries do objeto alimentos.

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);