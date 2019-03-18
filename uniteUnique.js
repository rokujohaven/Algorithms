//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique() {
  let args = [];
  for (let i = 0; i < arguments.length; ++i){
    args.push(arguments[i])
  }
  let result = [];
  for (let i = 0; i < args.length; ++i){
    for (let j = 0; j < args[i].length; ++j){
      //if not found in result
       if(result.indexOf(args[i][j]) == -1){ 
        result.push(args[i][j]);
      }
    }

  }
  console.log(result);
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
