// 1. A função reverseString é definida, que recebe uma string str como parâmetro.

// 2. Uma variável reversedString é inicializada como uma string vazia. Essa variável será usada para construir a nova string invertida.

// 3. O próximo passo é percorrer a string str de trás para frente. Para isso, é utilizado um loop for com uma variável i que começa no último índice da string (str.length - 1) e decrementa a cada iteração até chegar a 0 (i >= 0).

// 4.



function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}