//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

//A modular approach

function sumFibs(num) {

  //gets all Odd Fibonacci numbers and sums them. 
  let oddFibArr = Fib(num).filter(x => x % 2 != 0);
  return oddFibArr.reduce((accumulator, currentValue) => {return accumulator + currentValue});

}

function Fib(num){
  //gets all Fibonacci numbers less than the given num 
  let fibArr = [1,1]; 
  let sum = 0;
  let done = 0;    
  while(!done){
     
      sum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
      
      if (sum > num){
        done = 1; 
      }
      else{
          fibArr.push(sum);
      }
  }
  return fibArr;
}

//Test cases
console.log(sumFibs(4)); //5 
console.log(sumFibs(1000)); //1785
console.log(sumFibs(4000000)); //4613732
console.log(sumFibs(75024)); //60696
console.log(sumFibs(75025)); //135721
