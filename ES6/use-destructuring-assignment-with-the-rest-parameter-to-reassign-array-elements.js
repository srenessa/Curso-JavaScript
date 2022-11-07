const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    //Use a atribuição de desestruturação com o parâmetro rest
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);//será exibido 3,4,5,6,7,8,9,10
console.log(source);//será exibido 1,2,3,4,5,6,7,8,9,10