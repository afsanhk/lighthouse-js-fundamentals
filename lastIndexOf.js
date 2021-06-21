function lastIndexOf(array,number) {
  
  let indexStore = [];
  let lengthCompare = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] - number === 0) {
      indexStore.push(i);
    } else if (array [i] - number !== 0) {
      lengthCompare.push(i);
    }
  }
  if (array === [] || lengthCompare.length === array.length) {
    return -1;
  } else {
    return indexStore[(indexStore.length - 1)];
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// QUICKER WAY

/*

const lastIndexOf = (arr, num) => {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

*/