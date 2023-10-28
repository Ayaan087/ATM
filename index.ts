#! /usr/bin/env node
import inquirer from "inquirer";

interface ansType  {
userId:string,
userPin:number,
accountType:string,
transactionType:string,
amount:number

}
console.log("Hi,Welcome To The ATM Machine,What Amount Would You Like To Withdraw")
const input:ansType = await inquirer.prompt([

{
name:"userID",
message:"Put Your User Id",
type:"input",
},
{
    name:"userPin",
    message:"Put Your User Pin",
    type:"number"
},


{
    type:"list",
    name:"accountType",
    choices:["Current","Saving"],
    message:"Select Your Account Type",

},
{
    type:"list",
    name:"transactionType",
    choices:["fastCash","Withdraw"],
    message:"Select Your transaction",
    when(input){
        return input.accountType
    },
   
},
{
    type:"list",
    name:"amount",
    choices:[1000,2000,3000,4000,5000,6000,7000,8000,9000,10000],
    message:"Select Your amount",
    when(input){
        return input.transactionType == "fastCash"
    },
   
},
{
    type:"number",
    name:"amount",
    message:"Enter Your amount",
    when(input){
        return input.transactionType == "Withdraw"
    },
   
}


])
if(input.userId && input.userPin){

    const balance = Math.floor(Math.random()*10000000);
    console.log(balance)
    const EnteredAmount = input.amount;
    if(balance >= EnteredAmount){
    const remaining = balance - EnteredAmount;
    console.log("Your Remaining Balance Is", remaining)
 }else{
    console.log("Insuficient Balance")
}

}

