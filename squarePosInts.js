//Use arrow function syntax to compute the
//square of only the positive integers (decimal numbers are not integers) 
//in the array realNumberArray and store the new array in the variable squaredIntegers.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((element) => element > 0 && element % 1 == 0).map(x => x ** 2);
  return squaredIntegers;
};

// test
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); //prints 16, 1764, 36
