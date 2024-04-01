import inquirer from "inquirer";

let myBalance= 10000; //Dollar
let myPin=1234;

let pinAnswer = await inquirer.prompt(
    [
       {
          name: "pin",
          message: "enter your pin",
          type:"number"
       }
    ]
);

console.log(pinAnswer.pin);

    //Your pincode===1234
if (pinAnswer.pin===myPin ) {
    console.log("Correct Pin");
    

    //If user give correct pin then proceed on further process like check balance , withdraw and fast cash in under if 
    //For next we again run inquirer for user data 
    let actionperform = await inquirer.prompt(
     [
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw" , "check balance" , "Fash Cash" ,] // we use array[] for multiple choices

            //All of the answer of this object is store in actionperform      
        }
     ]
);
                                                                    //"WITHDRAW"
if (actionperform.operation === "withdraw") {
    let amountAns = await inquirer.prompt(    //The amount of user by clicking on enter your amount is store in amount.Ans
        [
            {
              name: "amount",
              message: "Enter your amount",
              type: "number"
            }
            
        ]
);
if (amountAns.amount <= myBalance) {
    myBalance -= amountAns.amount   //This will deduct the amount you input from your total balance
console.log("your remaining balance is", + myBalance);   

}else{
    console.log("Insufficient Balance"); 
    
}
//"CHECK BALANCE"

}else if (actionperform.operation === "check balance") {
    console.log("Your current balance is", + myBalance);

//"FASH CASH" 
} else if(actionperform.operation === "Fash Cash"){
    let fastamount = await inquirer.prompt(    //The selection of amount by user is store in fastamount.fast
        [
            {
                name: "fast",
                type: "list",
                message: "Select your amount",
                choices: ["1000" , "5000" , "8000" , "10000",] 
            }
        ]
    );
    if (myBalance -= fastamount.fast) {
        console.log("Your remaining balance is", +myBalance);
    }
}else{
    console.log("Invalid Pin");
}

