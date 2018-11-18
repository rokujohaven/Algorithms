//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

function reverseString(str) {
  var arr = str.split("");
  var revArr = [];
  for (let i = arr.length-1; i > -1; --i){
      revArr.push(arr[i]); 
  } 
  var returnStr = revArr.join("");
  return returnStr;
}

var a = "hello".split("");

//test cases
console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Why are we here?"));
