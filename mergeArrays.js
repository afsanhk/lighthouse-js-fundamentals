function merge(array1, array2) {
  
  // Creating a single merged array

  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }

  // Sorting through the merged array

  let mergedArray = array1;
  for (let j = 0; j < mergedArray.length; j++) {
    for (let k = j + 1; k < mergedArray.length; k++) {
      if (mergedArray[j] > mergedArray[k]) {
        let tempStoreHigh = mergedArray[j];
        let tempStoreLow = mergedArray[k];
        mergedArray[j] = tempStoreLow;
        mergedArray[k] = tempStoreHigh;
      }
    }
  }

  return mergedArray;

}


// TEST CODE

/*

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

*/