// Iterar pelas chaves de um objeto com uma instrução for...in

// Às vezes, você precisa percorrer todas as chaves de um objeto. Você pode usar um loop for...in para fazer isso.

// NOTA: Os objetos não mantêm uma ordem para as chaves armazenadas como os arrays; portanto, a posição de uma chave em um objeto, ou a ordem relativa em que ela aparece, é irrelevante ao referenciar ou acessar essa chave.

// Definimos uma função countOnline que aceita um argumento, allUsers.Use uma instrução for...in dentro dessa função para percorrer o objeto allUsers e retornar o número de usuários cuja propriedade online está definida como true.

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
    let count = 0;
    for (let objeto in allUsers) {
        
        if (allUsers[objeto].online == true) {
            count++;
            console.log(objeto);
        }

    }
    return count;
}

console.log(countOnline(users));