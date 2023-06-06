// 1. A função 'reverseString' é definida, que recebe uma string 'str' como parâmetro.

// 2. Uma variável 'reversedString' é inicializada como uma string vazia. Essa variável será usada para construir a nova string invertida.

// 3. O próximo passo é percorrer a string 'str' de trás para frente. Para isso, é utilizado um loop 'for' com uma variável 'i' que começa no últi'mo índice da string ('str.length - 1') e decrementa a cada iteração até chegar a 0 (i >= 0).

// 4. Dentro do loop, em cada iteração, o caractere correspondente ao índice 'i' é adicionado à variável 'reversedString' usando o operador de concatenação '+='. Isso significa que cada caractere encontrado é adicionado à nova string invertida.

// 5. Após percorrer todos os caracteres da string 'str' e adicioná-los à 'reversedString', o loop é concluído.

// 6. Por fim, a função retorna a string 'reversedString', que contém a versão invertida da string original.

// 7. Ao chamar 'reverseString'("hello"), a função retornará a string "olleh", que é a versão invertida de "hello".



function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}