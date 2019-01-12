//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let tobeDeleted = [];
  for (let i = 0; i < arr.length; ++i){
    if (Boolean(arr[i]) == false){
      tobeDeleted.push(arr[i]); 
    }
  }
  if(arr.includes(NaN)){
    for (let i = 0; i < tobeDeleted.length; ++i){
      if(Number.isNaN(tobeDeleted[i])){
        arr.splice(arr.findIndex(Number.isNaN),1);
      }
      else{
        arr.splice(arr.indexOf(tobeDeleted[i]),1);
      }
    }
  }
  else{
  for (let i = 0; i < tobeDeleted.length; ++i){
    arr.splice(arr.indexOf(tobeDeleted[i]),1);
  }
  }
  return arr;
}

console.log(bouncer([1, null, NaN, 2, undefined]));
