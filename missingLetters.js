//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let str_Arr = str.split("");
  for (let i = 0; i < str_Arr.length-1; ++i){
    //console.log(str_Arr[i].charCodeAt());
    //if correct next letter != actual next letter
    if(str_Arr[i].charCodeAt() + 1 != (str_Arr[i+1].charCodeAt())){
      return String.fromCharCode(str_Arr[i].charCodeAt()+1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce"));
