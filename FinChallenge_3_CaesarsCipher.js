function rot13(str) { // LBH QVQ VG!
  let transcribeAlpha = {"A":0, "B":1, "C":2, "D":3, "E":4, "F":5, "G":6, "H":7, "I":8, "J":9, "K":10, "L":11, "M":12, "N":13, "O":14, "P":15, "Q":16, "R":17, "S":18, "T":19, "U":20, "V":21, "W":22, "X":23, "Y":24, "Z":25};
  let decodeAlpha =  {0:"A", 1:"B", 2:"C", 3:"D", 4:"E", 5:"F", 6:"G", 7:"H", 8:"I", 9:"J", 10:"K", 11:"L", 12:"M", 13:"N", 14:"O", 15:"P", 16:"Q", 17:"R", 18:"S", 19:"T", 20:"U", 21:"V", 22:"W", 23:"X", 24:"Y", 25:"Z"
  };
  let msg = ""; 
  let num = 0; 
  for(let i = 0; i < str.length; ++i){
      if(typeof transcribeAlpha[str[i]] == "undefined"){
          msg = msg + str[i];
      }
      else{
        msg = msg + decodeAlpha[(transcribeAlpha[str[i]] + 13)%26]; 
      }
  }
  console.log(msg);
  return msg;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
rot13("LBH QVQ VG!");


