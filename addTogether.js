//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

//Calling this returned function with a single argument will then return the sum:

//var sumTwoAnd = addTogether(2);

//sumTwoAnd(3) returns 5.

//If either argument isn't a valid number, return undefined.

function addTogether() {
//check to see if addTogether has valid arguments 
  for (let i = 0; i < arguments.length; ++i){
    if(typeof arguments[i] != 'number'){
      return undefined; 
    }
  }
  if (arguments.length == 2){
    return arguments[0] + arguments[1];
  }
  else if (arguments.length == 1) {
    return (n => {if (typeof n != 'number'){//check to see if the return function's argument is valid 
                                return undefined;
                                }
                   else {
                    return arguments[0] + n;
                    }
                    }
                    );  
  }
  else{
    return undefined; 
  }
}

console.log(addTogether(2,3)); //5

let sumTwoAnd = addTogether(2); 

console.log(sumTwoAnd(3)); //5

console.log(addTogether(2)([3])); //return undefined because [3] is not a number
