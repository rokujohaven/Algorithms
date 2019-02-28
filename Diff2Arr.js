//Compare two arrays and return a new array with any items only 
//found in one of the two given arrays, but not both. 
//In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = []; 
  let dupes = [];
  //find the longer array
  let longer = [];
  let shorter = [];
  if(arr1.length>=arr2.length){
    longer = [...arr1]; 
    shorter = [...arr2];
  }
  else{
    longer = [...arr2];
    shorter = [...arr1];
  }

  //find duplicates in the two arrays
  for (let i = 0; i <= longer.length; ++i){
    if(shorter.includes(longer[i])){
      dupes.push(longer[i]);
    }
  }

  newArr = shorter.concat(longer);
  //filter on elements not in dupe array
  newArr = newArr.filter((value, index, arr) => {return !(dupes.includes(value))});
  console.log(newArr);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
