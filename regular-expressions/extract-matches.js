//Extraindo correspondências reais encontradas com o método .match().
//Para usar o método .match(), aplique o método em uma string e passe o regex dentro dos parênteses.
//A sintaxe .match é o "oposto" do método .test 

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); 