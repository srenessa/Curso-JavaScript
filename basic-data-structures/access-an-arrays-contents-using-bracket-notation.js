// Acessar o conteúdo de uma matriz usando a notação de colchetes.

// Agora que aprendemos como criar um array, vamos começar a pensar em como podemos acessar as informações desse array.

// Os arrays JavaScript são indexados em zero, o que significa que o primeiro elemento de um array está realmente na posição zero, não no primeiro.

// Para recuperar um elemento de uma matriz, podemos colocar um índice entre colchetes e anexá-lo ao final de uma matriz ou, mais comumente, a uma variável que faz referência a um objeto de matriz.

// Por exemplo, se queremos recuperar o "a" de ourArray e atribuí-lo a uma variável, podemos fazê-lo com o seguinte código: let ourVariable = ourArray[0]; (Agora nossaVariável tem o valor de a.).

// Além de acessar o valor associado a um índice, você também pode definir um índice para um valor usando a mesma notação: ourArray[1] = "not b anymore"; (Usando a notação de colchetes, agora redefinimos o item no índice 1 da string b, para não mais b.)

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1]= "tudo menos b";
// Only change code above this line
console.log(myArray);