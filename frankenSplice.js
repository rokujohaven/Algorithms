//You are given two arrays and an index.
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr=[...arr2]; //to avoid mutating the input arrays ES6
  arr.splice(n,0,arr1);
  return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
4,1,2,3,5

//alternative implementation
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr = arr2.slice(); 
  for (let i = 0; i < arr1.length; ++i){
     arr.splice(n,0,arr1[i]);
     n++;
  }
  return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

