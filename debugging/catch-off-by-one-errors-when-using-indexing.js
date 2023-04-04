// Prenda por um erros ao usar a indexação.

// A indexação JavaScript começa em zero, não em um, o que significa que o último índice é sempre um a menos que o comprimento do item.

// Se você tentar acessar um índice igual ao comprimento, o programa pode lançar um erro de referência "índice fora do intervalo" ou imprimir indefinido.

// Corrija os dois erros de indexação na função a seguir para que todos os números de 1 a 5 sejam impressos no console.


function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;

    for (let i = 0; i < len; i++) {
        console.log(firstFive[i]);
    }
}

countToFive();