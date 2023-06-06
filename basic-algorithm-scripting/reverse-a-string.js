// 1.

// 2.

// 3. O método join() cria e retorna uma nova string concatenando todos os elementos em uma matriz (ou um objeto semelhante a uma matriz).


function reverseString(str) {

    let separar_string = str.split('');
    console.log(">>> retornando string string " + separar_string);

    let inverter_string = separar_string.reverse();
    console.log(">>>retornando string invertida e separada " + inverter_string);

    let juntar_string = inverter_string.join('');
    console.log(">>>retornar string " + juntar_string);





    return str;
}

reverseString("hello");