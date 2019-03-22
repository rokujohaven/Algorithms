//Sum all the prime numbers up to and including the provided number.
//A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//The provided number may not be a prime.

//a modular approach 

function sumPrimes(num) {
  return primeList(num).reduce((aggregator, current) => {return aggregator + current});
}

function primeList(num){
  let primes = [];
   
  for (let i = 2; i <= num; ++i){
      let isPrime = true;
      for (let j = 2; j < i; ++j) {
        //console.log("i: " + i + " j: " + j);
        if(i % j == 0){
            isPrime = false;
            break;
        }
      }
      if (isPrime){
        primes.push(i);
      }
  }
  //console.log(primes);
  return primes; 
}

primeList(10);

console.log(sumPrimes(10));
console.log(sumPrimes(977));
