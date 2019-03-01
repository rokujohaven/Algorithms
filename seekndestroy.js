//Given an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values

  for (let i =1; i < arguments.length; ++i){
   
    arr = arr.filter(x=>(x!=arguments[i]));

  }
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1,1]

destroyer(["tree", "hamburger", 53], "tree", 53) //["hamburger"]

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") // [12,92,65]
