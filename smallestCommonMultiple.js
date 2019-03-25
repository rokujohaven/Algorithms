//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let multiple = arr[0] * arr[1];
  let increment = multiple;  
  let done = false;
  let small = 0; 
  let large = 0; 
  if (arr[0] < arr[1]){
    small = arr[0];
    large = arr[1]; 
  } 
  else{
    small = arr[1];
    large = arr[0];
  }
  while(!done){ 
    let counter = 0; 
  for (let i = small; i <= large; ++i){
    //console.log("trying to divide " + i + " by multiple " + multiple); 
    if(multiple % i != 0){
      //console.log("updating multiple...");
      multiple = multiple + increment;  
     // console.log("multiple is now " + multiple);
      break; //break out of for loop 
            }
          counter++; //otherwise count it as 1 time
        }

      //check if a complete run through the for loop was made.   
      if(counter == (arr[1] - arr[0])+1){
        done = true; 
      }
  }
  return multiple;
}

console.log(smallestCommons([1,5])); //60
console.log(smallestCommons([2, 10])); //2520
console.log(smallestCommons([1, 13])); //360360
console.log(smallestCommons([23, 18])); //6056820
console.log(smallestCommons([5, 1])); //60
