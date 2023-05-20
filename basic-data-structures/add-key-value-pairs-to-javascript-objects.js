// Adicionar pares chave-valor a objetos JavaScript

// Basicamente, os objetos são apenas coleções de pares chave-valor. Em outras palavras, são pedaços de dados (valores) mapeados para identificadores únicos chamados propriedades (chaves). 

/*
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

O código acima define um objeto de personagem de videogame Tekken chamado tekkenCharacter. Ele tem três propriedades, cada uma mapeando para um valor específico. Se você quiser adicionar uma propriedade adicional, como "origem", isso pode ser feito atribuindo origem ao objeto:

tekkenCharacter.origin = 'South Korea';

Isso usa a notação de ponto. Se você observar o objeto tekkenCharacter, ele agora incluirá a propriedade origin.
*/

/*
tekkenCharacter['hair color'] = 'dyed orange';

A notação de colchetes é necessária se sua propriedade tiver um espaço ou se você quiser usar uma variável para nomear a propriedade.No caso acima, a propriedade é colocada entre aspas para denotá-la como uma string e será adicionada exatamente como mostrado.

Sem aspas, ela será avaliada como uma variável e o nome da propriedade será qualquer que seja o valor da variável.
*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};


console.log(foods);