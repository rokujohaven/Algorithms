function largestOfEachSubArray(arr) {
//arr is an array of size n, composed of n subarrays 
  let largeArr = []; 
  for (let i = 0; i < arr.length; ++i){
    //set default value of largest number in each array 
    //to the first element
    let largest = arr[i][0]; 
    for (let j = 0; j < arr[i].length; ++j)
    {
        if (arr[i][j] > largest){
          largest = arr[i][j]; 
        }
    }
    //push the largest of each subarray to the array of largest numbers
    largeArr.push(largest); 
  }
  return largeArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
//returns 5, 27, 39, 1001
