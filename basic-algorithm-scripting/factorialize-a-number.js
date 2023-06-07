// Fatorializar um Número

// Retorna o fatorial do inteiro fornecido.

// Se o inteiro for representado pela letra n, um fatorial é o produto de todos os inteiros positivos menores ou iguais a n.

// Os fatoriais são frequentemente representados com a notação abreviada n!

// Por exemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
    let fatorialNum = 1;
    for (let i = 1; i <= num; i++) {
        fatorialNum = fatorialNum * i;
    }

    return fatorialNum;
}

console.log(factorialize(5));
