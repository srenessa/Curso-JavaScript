// Evite loops infinitos com uma condição de terminal válida.

// Os loops são ótimas ferramentas quando você precisa que seu programa execute um bloco de código um determinado número de vezes ou até que uma condição seja atendida, mas eles precisam de uma condição terminal que finalize o loop.

//  É provável que loops infinitos congelem ou travem o navegador e causem um caos geral na execução do programa.


function myFunc() {
    for (let i = 1; i != 4; i += 2) {
        console.log("Still going!");
    }
}