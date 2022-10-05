function nextInLine(arr, item) {
    // Adicionando o número ao final da matriz, com push.
    arr.push(item);
    //removendo o primeiro elemento da matriz, com shift
    const removed = arr.shift();
    // retornando o elemento que foi removido.
    return removed;
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));