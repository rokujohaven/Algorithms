function checkCashRegister(price, cash, cid) {
// Here is your change, ma'am.
  var change = cash - price;
  let reducer = (accumulator, currentvalue) => accumulator + currentvalue[1]; 
  if(change < 0){
    return "ERROR: CLIENT DOES NOT HAVE ENOUGH MONEY TO BUY ITEM"
  }
  else if (change == 0){ //if exact change
    return {status: "CLOSED", change:cid};
  }
  else if(cid.reduce(reducer, 0) < change){ //if not enough money in drawer
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else{ //if change is needed and drawer has enough money
    let due = []; 
    for (let i = cid.length-1; i > -1; --i)
    {
     if(cid[i][1] < change){
       continue;
     }
     else{
       change = 
     }
    }
    return{status: "OPEN", change:[]};
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
