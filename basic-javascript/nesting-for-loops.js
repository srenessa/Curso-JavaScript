function multiplyAll(arr) {
    let product = 1;
    //Modifique a função multipleAll para que ela retorne o produto de todos os números nas sub-matrizes de arr.
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }

    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

