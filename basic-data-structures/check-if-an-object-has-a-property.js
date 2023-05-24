// Verifique se um objeto tem uma propriedade

// Agora podemos adicionar, modificar e remover chaves de objetos. Mas e se apenas quiséssemos saber se um objeto tem uma propriedade específica?

// O JavaScript nos fornece duas maneiras diferentes de fazer isso. Um usa o método hasOwnProperty() e o outro usa a palavra-chave in. 

/* Por exemplo se tivermos um objeto users com uma propriedade de Alan, podemos verificar sua presença de uma das seguintes maneiras:

users.hasOwnProperty('Alan');
'Alan' in users;

Ambos retornariam true.
*/

let users = {
Alan: {
    age: 27,
        online: true
},
Jeff: {
    age: 32,
        online: true
},
Sarah: {
    age: 48,
        online: true
},
Ryan: {
    age: 19,
        online: true
}
};

function isEveryoneHere(userObj) {

}

console.log(isEveryoneHere(users));