//given an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.

function sumAll(arr) {
  let sum = 0; 
  //determining max and min of the input array..
  let min;
  let max;  
  if (arr[0] < arr[1]){
    min = arr[0]; 
    max = arr[1]; 
  }
  else if (arr[0] > arr[1]){
    min = arr[1];
    max = arr[0]; 
  }
  else{ //if arr[0] and arr[1] are the same 
    return arr[0]*2; 
  }

  for (let i = min; i <= max; ++i){
    sum+=i; 
  }
  return sum;
}

//test cases 
console.log(sumAll([1, 4])); //returns 10 
console.log(sumAll([5,5])) //returns 10 
console.log(sumAll([4, 1])); //returns 10  
