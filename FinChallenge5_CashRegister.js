function checkCashRegister(price, cash, cid) {
// Here is your change, ma'am.
console.log("Welcome!");
  let cid_cp = [...cid]; //in case we cannot return enough change. 
  var change = cash - price;
  let reducer = (accumulator, currentvalue) => accumulator + currentvalue[1]; 
  let moneyAvail = cid.reduce(reducer,0);
  console.log("The cash register has: $" + moneyAvail + " in change.") 
  let unit_Val = {"PENNY":.01, "NICKEL":.05, "DIME":.1, "QUARTER":0.25, "ONE":1, "FIVE":5, "TEN":10, "TWENTY":20, "ONE HUNDRED":100};

  if(change < 0){
    return "ERROR: CLIENT DOES NOT HAVE ENOUGH MONEY TO BUY ITEM";
  }
  else if (change == 0 || change == moneyAvail){ //if exact change
    return {status: "CLOSED", change:cid};
  }
  else if(moneyAvail < change){ //if not enough money in drawer
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else{ //if change is needed and drawer has enough money
    let due = []; 
    currency_roll:
    for (let i = cid.length-1; i > -1; --i)
    {
      //if change due is less than a particular currency unit, we cannot use that unit
        if(change < unit_Val[cid[i][0]]){
            console.log("passing over: " + cid[i][0]);
            continue; 
        }
        else{
            console.log("testing " + cid[i][0] + "...$" + cid[i][1]); 
            //deduct by a whole number of the change
            let done = false; 
            while(!done){
              //decrement is monetary amount of change of that particular currency given out 
              let decrement = Math.min((unit_Val[cid[i][0]])*Math.floor(change/unit_Val[cid[i][0]]), cid[i][1]);
              console.log(decrement);
              //update the cash drawer with the decrement
              cid[i][1] = cid[i][1] - decrement; 
              //update remaining change needed with decrement amount 
              change = change - decrement; 
              //record change of that currency given in the due list 
              due.push([cid[i][0],decrement]);
              console.log("Giving " + "$" + decrement + " worth of " + cid[i][0]);
              console.log(due[due.length - 1]);
              console.log("$" + change + " LEFT"); 
              if(change < 0.01 & change > 0){ //for anything less than a penny just give buyer a penny.
                cid["PENNY"] = cid["PENNY"] - 0.01;
                due[due.length - 1][1]+=.01; 
                console.log("giving user one extra penny"); 
                console.log( due[due.length - 1][1]);
                change = change - change;//make change 0; 
                done = true;
              }
              else{
                continue currency_roll;
              }
            }
        }
        //this part is only reached when no change is left or all the currency units have been iterated over. in this case we stop evaluating any smaller currencies. 
        break;
    }
    if (change == 0){
        return{status: "OPEN", change:due};
    }
    else{//cannot return exact change. return all change given so far. transaction fails. 
      cid = [...cid_cp]
      console.log("FAILED TRANSACTION. UNABLE TO RETURN EXACT CHANGE.");
      return{status: "INSUFFICIENT_FUNDS", change: []}
    }
  }
  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

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
