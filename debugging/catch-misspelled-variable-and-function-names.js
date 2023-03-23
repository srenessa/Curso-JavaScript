// Capturar nomes de variáveis ​​e funções com erros ortográficos

// Uma das formas comuns que os bugs assumem é um problema de nível de sintaxe, o erro de ortografia.

// Caracteres transpostos, ausentes ou capitalizados incorretamente em um nome de variável ou função farão com que o navegador procure um objeto que não existe.

// Corrija os dois erros de ortografia no código para que o cálculo netWorkingCapital funcione.


/* antes
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
 */


// Alteração dos nomes "recievables - payable" para "receivables - payables".
//depois
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

