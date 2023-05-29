// Modificar uma matriz armazenada em um objeto

// Agora você já viu todas as operações básicas para objetos JavaScript. Você pode adicionar, modificar e remover pares chave-valor, verificar se existem chaves e iterar todas as chaves em um objeto.

// O objeto de usuário(user) contém três chaves. A chave de dados(date) contém cinco chaves, uma das quais contém uma matriz de amigos(friends). A partir disso, você pode ver como os objetos são flexíveis como estruturas de dados. Começamos a escrever uma função addFriend. Termine de escrevê-lo para que ele pegue um objeto de usuário(user) e adicione o nome do argumento amigo(friend) ao array armazenado em user.data.friends e retorne esse array.

// A função addFriend recebe dois parâmetros: userObj e friend. O userObj é o objeto do usuário e friend é o nome do amigo a ser adicionado. Dentro da função, usamos a notação de ponto para acessar a propriedade friends dentro do objeto data no userObj. Em seguida, usamos o método push para adicionar o nome do amigo (friend) ao final do array friends.


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
userObj.data.friends.push(friend);
return userObj.data.friends;

}

console.log(addFriend(user, 'Pete'));