// Iterar pelas chaves de um objeto com uma instrução for...in

// Às vezes, você precisa percorrer todas as chaves de um objeto. Você pode usar um loop for...in para fazer isso.

// NOTA: Os objetos não mantêm uma ordem para as chaves armazenadas como os arrays; portanto, a posição de uma chave em um objeto, ou a ordem relativa em que ela aparece, é irrelevante ao referenciar ou acessar essa chave.

// Definimos uma função countOnline que aceita um argumento, allUsers.

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {

}

console.log(countOnline(users));