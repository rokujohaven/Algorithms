//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  //console.log(Object.keys(source));

  let Skeys = Object.keys(source); 

  //console.log(Skeys);
  //for each object in list
  for(let i = 0; i < collection.length; ++i){
    //for each key in object 
    //let Objkeys = Object.keys(collection[i]);
    let count = 0; 
    for (const s_key of Skeys){
      //console.log(source[s_key]);
      //console.log(collection[i][s_key]);
      if(source[s_key] != collection[i][s_key]){
      break;                      
      }
      else{
        count++; 
      }
    }
    if(count == Skeys.length){
      arr.push(collection[i])
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
