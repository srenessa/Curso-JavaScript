// Explore as diferenças entre as palavras-chave var e let

// 1. Escopo: var: Tem escopo de função, o que significa que a variável pode ser vista em toda a função onde é declarada. let: Tem escopo de bloco, então a variável só pode ser vista dentro do bloco (entre chaves) onde é declarada.

// 2. Içamento (Hoisting): var: É "içada" para o topo da função ou escopo global, podendo ser usada antes de ser declarada. let: Também é içada, mas não pode ser usada antes de ser declarada, evitando comportamentos inesperados.

// 3. Reatribuição: var e let: Ambas podem ser reatribuídas a novos valores.

// Diferentemente de var, quando você usa let, uma variável com o mesmo nome só pode ser declarada uma vez.

// Resumindo, use let em vez de var na maioria dos casos para evitar problemas relacionados ao escopo e ao içamento, tornando seu código mais seguro e fácil de entender.

// Atualize o código para que ele use apenas a palavra-chave let.

let catName = "Oliver";
let catSound = "Meow!";