// Às vezes, queremos verificar grupos de caracteres usando uma expressão regular e, para isso, usamos parênteses ().

// Se você quiser encontrar Penguin ou Pumpkin em uma string, você pode usar a seguinte Expressão Regular: /P(engu|umpk)in/g.

// Em seguida, verifique se os grupos de strings desejados estão na string de teste usando o método test().

// Corrija o regex para que ele verifique os nomes de Franklin Roosevelt ou Eleanor Roosevelt de maneira sensível a maiúsculas e minúsculas e deve fazer concessões para nomes do meio.

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; 
let result = myRegex.test(myString); 