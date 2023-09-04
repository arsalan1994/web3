// const promptSync = require("prompt-sync")();
import sum from "./firstModule.js";
sum;
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "Enter your First Name"
    },
    {
        name: "ContactNumber",
        type: "number",
        message: "Enter your Contact Number",
        validation: function (ContactNumber) {
            if (ContactNumber < 10) {
                return "Enter greater then 10";
            }
        }
    },
    {
        name: "gender",
        type: "checkbox",
        message: "Enter the gender",
        choices: ["Male", "Female"]
    },
    {
        name: "confirmation",
        type: "confirm",
        message: "Please Confirm or not"
    }
]);
console.log(answers);
console.log(answers.userName);
console.log(answers.ContactNumber);
console.log(answers.gender);
console.log(answers.confirmation);
