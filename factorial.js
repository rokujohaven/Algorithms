//return the factorial of a nonnegative number. 

//recursive implementation
function factorializeR(num) {
  if (num == 0){
    return 1; 
  }
  else{
    return num * factorialize(num - 1);
  }
}

//iterative implementation 
function factorialize(num) {
  let product = 1;
  if (num ==0){
    return 1; 
  }
  for (let i = 1; i <= num; ++i){
    product*=i; 
  }
  return product; 
}

//test
console.log(factorializeR(5)); //120
console.log(factorialize(5)); //120
