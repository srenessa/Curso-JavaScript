//retorne um número inteiro aleatório maior ou igual a myMin e menor ou igual a myMax, inclusive.
function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

}