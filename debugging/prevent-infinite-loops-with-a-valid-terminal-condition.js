// Evite loops infinitos com uma condição de terminal válida.

// Os loops são ótimas ferramentas quando você precisa que seu programa execute um bloco de código um determinado número de vezes ou até que uma condição seja atendida, mas eles precisam de uma condição terminal que finalize o loop.

//  É provável que loops infinitos congelem ou travem o navegador e causem um caos geral na execução do programa.

// A função myFunc() contém um loop infinito porque a condição terminal i != 4 nunca será avaliada como falsa (e interromperá o loop).

// Corrija o operador de comparação na condição terminal para que o loop seja executado apenas para i menor ou igual a 4. E não i igual ou diferente de 4.


function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}