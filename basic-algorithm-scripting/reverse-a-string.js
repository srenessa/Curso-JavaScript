// Inverter uma String

// Inverta a string fornecida e retorne a string invertida. Por exemplo, "olá" deve se tornar "olleh".

// --------------------------------------------------------------------------------

// 1. O método split() divide uma string em um array de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão,  Se (" "/ ' ') for usado como separador, a string será dividida entre as palavras.

// 2. O método reverse() inverte um array no lugar e retorna a referência ao mesmo array, o primeiro elemento do array se tornando o último, e o último elemento do array se tornando o primeiro

// 3. O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

function reverseString(str) {

    //1
    let separar_string = str.split('');
    console.log(">>> retornando string string " + separar_string);

    //2
    let inverter_string = separar_string.reverse();
    console.log(">>>retornando string invertida e separada " + inverter_string);

    //3
    let juntar_string = inverter_string.join('');
    console.log(">>>retornar string " + juntar_string);

    return str;
}

reverseString("hello");