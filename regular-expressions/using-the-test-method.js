//Uma maneira de testar um regex é usar o método .test()
//as aspas não são necessárias na expressão regular.
//O método .test() pega o regex, aplica-o a uma string (que é colocada entre parênteses) e retorna verdadeiro ou falso se seu padrão encontrar algo ou não.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
