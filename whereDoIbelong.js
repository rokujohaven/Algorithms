//Return the lowest index at which a value (second argument) 
//should be inserted into an array (first argument) once it has been sorted. 
//The returned value should be a number.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  //bubblesort
  for (let i = 0; i < arr.length - 1; ++i){
    for (let j = 0; j < arr.length; ++j){
      if(arr[j] < arr[j-1]){
        let temp = arr[j-1]; 
        arr[j-1] = arr[j]; 
        arr[j] = temp; 
      }
    }
  }
  
  //special case
  if (arr.length == 0){ //if empty array, it's always going to be the first element. we put it here because won't run in for loop below (i = 0, i < 0, for loop never runs)
      return 0; 
    }
    
  //if non empty array...
  for (let i = 0; i < arr.length; ++i){
    if (arr[i] == num){
      return arr.indexOf(num); 
    }
    else if (arr[i] > num){
      arr.splice(i,0,num);
      break;
    }
    else{ //if num is bigger than all the elements of arr
    arr.push(num);
    }
  }
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
