import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number",
        type: "number",
        name: "firstNumber" },
    //This is the first number that user input for operations
    { message: "Enter second number",
        type: "number",
        name: "secondNumber" },
    //This is the second number that user input for operations
    {
        message: "select one of the operators to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponentation",
        ],
        //This is the operation in which user  select the operator 
    },
]);
// CONDITIONAL STATMENTS
if (answer.operator === "Addition") { //If user selective operator is equal to addition 
    console.log(Number(answer.firstNumber) + Number(answer.secondNumber)); //Then print user first number + second number
}
else if (answer.operator === "Subtraction") { //If user selective operator is equal to substration
    console.log(Number(answer.firstNumber) - Number(answer.secondNumber)); //Then print user first number - second number
}
else if (answer.operator === "Multiplication") { //If user selective operator is equal to multiplication
    console.log(Number(answer.firstNumber) * Number(answer.secondNumber)); //Then print user first number * second number
}
else if (answer.operator === "Division") { //If user selective operator is equal to division
    console.log(Number(answer.firstNumber) / Number(answer.secondNumber)); //Then print user first number / second number
}
else if (answer.operator === "Modulus") { //If user selective operator is equal to modulus
    console.log(Number(answer.firstNumber) % Number(answer.secondNumber)); //Then print user first number % second number
}
else if (answer.operator === "Exponentation") { //If user selective operator is equal to exponentation
    console.log(Number(answer.firstNumber) ** Number(answer.secondNumber)); //Then print user first number **second number
}
else { //if all above become false 
    console.log("please select valid operator");
} //Then print this message
