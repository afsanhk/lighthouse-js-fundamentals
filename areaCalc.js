function calculateRectangleArea (length, width){
  let areaRect = '';
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    areaRect = length * width;
    return areaRect;
  }
}

function calculateTriangleArea (base, height){
  let areaTri = '';
  if (base < 0 || height < 0) {
    return undefined;
  } else {  
    areaTri = 0.5 * base * height;
    return areaTri;
  }  
}

function calculateCircleArea (radius){
  let areaCir = '';
  if (radius < 0) {
    return undefined;
  } else {
    areaCir = (Math.PI) * (radius * radius);
    return areaCir;
  }
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
