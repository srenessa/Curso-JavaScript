// 1.

// 2.

// 3. O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

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