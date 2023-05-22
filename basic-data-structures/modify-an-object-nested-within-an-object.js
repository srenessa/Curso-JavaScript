// Modificar um objeto aninhado dentro de um objeto

// As propriedades do objeto podem ser aninhadas em uma profundidade arbitrária e seus valores podem ser qualquer tipo de dados suportados pelo JavaScript, incluindo matrizes e até mesmo outros objetos.

// Para atribuir o valor 10 à propriedade ocupada do objeto onlineStatus(busy) aninhado, usamos a notação de ponto para referenciar a propriedade.

/* antes: 
let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
    active: 67,
    away: 13,
    busy: 8
    }
        }
};

durante:
nestedObject.data.onlineStatus.busy = 10;
*/

// Aqui definimos um objeto userActivity, que inclui outro objeto aninhado dentro dele. Defina o valor da chave online para 45.

