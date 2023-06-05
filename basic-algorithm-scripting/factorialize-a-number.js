// Fatorializar um Número

// Retorna o fatorial do inteiro fornecido.

// Se o inteiro for representado pela letra n, um fatorial é o produto de todos os inteiros positivos menores ou iguais a n.

// Os fatoriais são frequentemente representados com a notação abreviada n!

function factorialize(num) {
    let resultado = 1;

    for (let i= 1; i <= num; i++ ) {
        resultado *= i;
    }
}



factorialize(5);