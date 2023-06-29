// Verifique se uma string (primeiro argumento, str) termina com a string de destino fornecida (segundo argumento, target).

// Primeiro argumento(str = Bastian), Segundo argumento(target = n)

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) ===target;

}
    console.log(confirmEnding("Bastian", "n"));

