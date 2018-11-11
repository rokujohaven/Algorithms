//Setup
var contacts = [
  //contacts is a list of objects 
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){

//check if name is an actual contact's firstName and the given prop is a property of that contact 
//if both are true, then return 'value' of property. 
 
for (var i = 0; i < contacts.length; ++i){
  if ((name === contacts[i].firstName)){
      if(contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop]; 
      }
      else {
          return "No such property"; 
      }
  }
}
//if the loop completed without returning anything.. 
//so name not in contact list
return "No such contact"; 

}

// Change these values to test your function
lookUpProfile("Akira", "likes");
//test outputs
console.log(contacts.length);
console.log(contacts[0].firstName);
