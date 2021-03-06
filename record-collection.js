//for description see: 
//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/record-collection
//Write a function which takes an album's id (like 2548), 
//a property prop (like "artist" or "tracks"), 
//and a value (like "Addicted to Love") to modify the data in this collection.
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if(prop === "tracks"){
    if (!collection[id].hasOwnProperty(prop)){//if tracks didn't previously exist
      //also can write as if(!collection[id][prop])
      if (value !== "") //if value input is nonempty
      {
        collection[id][prop] = [value]; //create an empty array and fill it with the value.
      }
    }
    else{// if tracks did exist 
      if (value !== ""){ //and value input is nonempty 
      collection[id][prop].push(value); 
      }
      else{ //if value input is empty 
        delete collection[id][prop]; //delete the property
      }
    }
  }
  else { //prop !== "tracks"
      if (value !== ""){
        collection[id][prop] = value;
      }
      else {
        delete collection[id][prop]; 
      }
  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(2468, 'tracks', "Free");
console.log(collection['5439']['artist']); 
console.log(collection['2468']['tracks'][0]);
