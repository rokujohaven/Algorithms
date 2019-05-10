function checkCashRegister(price, cash, cid) {
// Here is your change, ma'am.
  var change = cash - price;
  let reducer = (accumulator, currentvalue) => accumulator + currentvalue[1]; 
  let moneyAvail = cid.reduce(reducer,0); 
  let unit_Val = {"PENNY":.01, "NICKEL":.05, "DIME":.1, "QUARTER":0.25, "ONE":1, "FIVE":5, "TEN":10, "TWENTY":20, "ONE HUNDRED":100};

  if(change < 0){
    return "ERROR: CLIENT DOES NOT HAVE ENOUGH MONEY TO BUY ITEM";
  }
  else if (change == 0){ //if exact change
    return {status: "CLOSED", change:cid};
  }
  else if(moneyAvail < change){ //if not enough money in drawer
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else{ //if change is needed and drawer has enough money
    let due = []; 
    for (let i = cid.length-1; i > -1; --i)
    {
      //if change is less than a particular currency unit, we cannot use that unit
        if(change < unit_Val[cid[i][0]]){
            console.log("passing over: " + cid[i][0]);
            continue; 
        }
        else{
            console.log("testing " + cid[i][0] + "...$" + cid[i][1]); 
            if (cid[i][1]>change){
              
            }
        }
    }
    return{status: "OPEN", change:due};
  }
  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
