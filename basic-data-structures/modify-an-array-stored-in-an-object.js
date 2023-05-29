// Modificar uma matriz armazenada em um objeto

// Agora você já viu todas as operações básicas para objetos JavaScript. Você pode adicionar, modificar e remover pares chave-valor, verificar se existem chaves e iterar todas as chaves em um objeto.

// O objeto de usuário contém três chaves. A chave de dados contém cinco chaves, uma das quais contém uma matriz de amigos. A partir disso, você pode ver como os objetos são flexíveis como estruturas de dados. Começamos a escrever uma função addFriend.


let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line

    // Only change code above this line
}

console.log(addFriend(user, 'Pete'));