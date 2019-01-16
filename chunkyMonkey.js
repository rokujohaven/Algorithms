//Write a function that splits an array 
//(first argument) into groups the length of size (second argument) 
//and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let retArr = []; 
  let retI = 0; 
  let i = 0; 
  while(i < arr.length){
    let subArr = []; 
    for (let j = 0; j < size; ++j){
    //if there are no elements left in the array, do nothing. 
      if(i < arr.length){
      subArr.push(arr[i]);
      i++;
      }
      
    }
    retArr[retI] = subArr; 
    retI++;
  }
  return retArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

