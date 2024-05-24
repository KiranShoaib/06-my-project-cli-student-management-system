#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber: number = Math.floor(10000 + Math.random() * 90000);

let balance: number = 0;

let studentInfo = await inquirer.prompt(
    [
        {
            name: "student",
            type: "input",
            message: "Enter student name: ",
            validate: function(value){
                if (value.trim() !== "") {
                    return true;
                }
                return "Please enter a non-empty value.";
            }
        },
        {
            name: "courses",
            type: "list",
            message: "Select the course to enrolled:",
            choices: ["MS.Office", "HTML", "CSS", "JavaScript", "TypeScript", "Python"]
        }
    ]
);

const courseFee: {[key: string]: number} = {
    "MS.Office": 2500, 
    "HTML": 3500, 
    "CSS": 4500,
    "JavaScript": 5500,
    "TypeScript": 6500, 
    "Python": 9500
};

console.log(`\nCourse Fees: ${courseFee[studentInfo.courses]}\n`);
console.log(`Balance: ${balance}\n`);

let paymentMethod = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: "Please select payment method:",
            choices: ["BankTransfer", "EasyPaisa", "JazzCash"]
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money:",
            validate: function(value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter a non-empty value";
            }
        }
    ]
);

console.log(`\nYou select payment method ${paymentMethod.payment}\n`);

const courseFees = courseFee[studentInfo.courses];
const paymentAmount = parseFloat(paymentMethod.amount);

if(courseFees === paymentAmount) {
    console.log(`Congratulation, You have successfully enrolled in ${studentInfo.courses}.\n`);  
    
let option = await inquirer.prompt(
    {
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View Status", "Exit"]
    }
);

if(option.select === "View Status") {
    console.log("\n*******Status*******");
    console.log(`Student Name: ${studentInfo.student}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${studentInfo.courses}`);
    console.log(`Course Fees Paid: ${paymentAmount}`);
    console.log(`Balance: ${balance += paymentAmount}`);

}else{
    console.log("\nExiting Student Management System");
} 
    
}else {
    console.log("Invalid amount due to course\n");
}


