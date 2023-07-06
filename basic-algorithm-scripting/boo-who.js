// Verifique se um valor é classificado como um primitivo booleano. Retorna verdadeiro ou falso. Primitivas booleanas são verdadeiras e falsas

function booWho(bool) {
    if (bool === false) {
        return true;
    }
    return bool === true;
}


booWho(null);

/* Ou utilizar o operador typeof para verificar se o tipo de value é igual a 'boolean'. Se for igual, a função retorna true, caso contrário, retorna false.

function booWho(bool) {

    return typeof bool === "boolean";
}

booWho(null);

*/