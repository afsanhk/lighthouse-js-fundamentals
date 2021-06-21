function range(start, end, step) {
  let output = [];
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else if (start > end) {
    return [];
  } else if (step <= 0) {
    return [];
  } else {
    let n = start;
    for (let i = n; i <= end; i = i + step) {
      console.log(i);
      output.push(i);
    }
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));