//Return the provided string with the first letter of each word 
//capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  let arr = str.split(" ");
  let word; 
  for (let i = 0; i < arr.length; ++i){
    word = "";
    word = arr[i][0].toUpperCase();
    let sub = arr[i].substring(1).toLowerCase(); 
    word+=sub; 
    arr[i] = word; 
  }
  let ans = arr.join(" ");
  return ans; 
}

console.log(titleCase("I'm a little tea pot"));
