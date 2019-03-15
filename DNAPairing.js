//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let arr = str.split("");
  console.log(arr);
  let returnArr = []; 

  for (let i = 0; i < arr.length; ++i){
    if(arr[i] == 'G'){
        returnArr.push(['G','C']);
    }
    else if(arr[i] == 'C'){
        returnArr.push(['C','G']);
    }
    else if(arr[i] == 'A'){
        returnArr.push(['A','T']);
    }
    else if(arr[i] == 'T'){
        returnArr.push(['T','A']);
    }
    else{
      return "Bad input. Not either A, T, C, or G";
    }
  
  }
  console.log(returnArr); 
  return returnArr;
}

pairElement("GCG");
