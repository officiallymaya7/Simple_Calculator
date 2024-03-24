#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message : "Enter First number",
        type : "number",
        name : "firstNumber"
    },
    {
        message : "Enter Second number",
        type : "number",
        name : "secondtNumber"
    },
    {
        message : "Select one of the operator to perform action",
        type : "list",
        name : "operator",
        choices : ["Addition","Subtraction","Multiplication","Division"],

    },
]);
//console.log(answer)
//Conditional Statements
if(answer.operator === "Addition"){
    console.log( answer.firstNumber + answer.secondtNumber)
} else if (answer.operator === "Subtraction"){
    console.log( answer.firstNumber - answer.secondtNumber)
} else if (answer.operator === "Multiplication"){
    console.log( answer.firstNumber * answer.secondtNumber)
}
else if(answer.operator === "Division"){
    console.log( answer.firstNumber / answer.secondtNumber)
}
else {
    console.log("Enter a valid Number")
}