//Estamos chamando Math.random(), multiplicando o resultado por 10, então passando o valor para a função Math.floor() para arredondar o valor para o número inteiro mais próximo.gerar. 

//Estamos retornando um número inteiro aleatório entre 0 e 9.
function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());