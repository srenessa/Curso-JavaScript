// Prenda por um erros ao usar a indexação.

// A indexação JavaScript começa em zero, não em um, o que significa que o último índice é sempre um a menos que o comprimento do item.

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 1; i <= len; i++) {
        // Only change code above this line
        console.log(firstFive[i]);
    }
}

countToFive();