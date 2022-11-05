let a = 8, b = 6;
//desestruturação de array
//atribuindo elementos a variáveis(isso não é possível no spread).
//trocando valores/  'a' está recebendo o valor armazenado em 'b' e 'b' recebendo o valor armazenado em 'a'.
[a,b]=[b,a];
console.log(a,b);


//Para acessar o valor em qualquer índice em um array com desestruturação é necessário usar vírgulas para chegar ao índice desejado:
//const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
//console.log(a, b, c);
//O console exibirá os valores de a, b e c como 1, 2, 5.