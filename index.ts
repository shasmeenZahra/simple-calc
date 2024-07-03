#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
{message: "Enter first number", type: "number" , name :"firstNumber"},
{message : "Enter second number" , type : "number" , name : "secoundNumber"},
{
    message : "Select one of the operators to perform operation",
     types :"list" ,
    name : "operators" ,
    choices :["Addition","Substraction","Multiplication","Division"] , 
    },
]);

if (answer.operators ==="Addition"){
    console.log(answer.firstNumber + answer.secoundNumber);

}else if (answer.operators === "Substraction"){
    console.log(answer.firstNumber - answer.secoundNumber);

} else if (answer.operators === "Multiplication"){
    console.log(answer.firstNumber * answer.secoundNumber);

}else if (answer.operators === "Division"){
    console.log(answer.firstNumber / answer.secoundNumber);
}else {
    console.log("Please select valid operators")
}
