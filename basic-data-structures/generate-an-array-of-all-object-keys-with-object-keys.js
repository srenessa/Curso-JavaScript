// Gere uma matriz de todas as chaves de objeto com Object.keys()

// Também podemos gerar um array que contém todas as chaves armazenadas em um objeto com o método Object.keys().

// Esse método usa um objeto como argumento e retorna uma matriz de strings representando cada propriedade no objeto.Novamente, não haverá ordem específica para as entradas na matriz.


let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
}

console.log(getArrayOfUsers(users));