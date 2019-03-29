  //convert binary to number 
  //then number to char
function binaryAgent(str) {
  str = str.split(" ");
  let wordArr = []; 
  for (let i = 0; i < str.length; ++i){
    //let num = parseInt(str[i], 2); --> too boring.   
    let num = binToTen(str[i]);
    let char = String.fromCharCode(num); 
    wordArr.push(char);
  }

  let finStr = wordArr.join("");
  console.log(finStr); 
  return finStr;
}

function binToTen(binaryString){
  let base10 = 0; 
  for (let i = binaryString.length - 1; i >= 0; --i){
    if (binaryString[i] == 1){
        base10 = base10 + (2**(binaryString.length - 1 - i));
    }
  }
  return base10; 
}; 

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

