#!/usr/bin/node env
import inquirer from "inquirer";
import chalk from "chalk";
// import Showbanner from "banner"

import sumOfTwo from "./sum.js";
import productOfTwo from "./multiply.js";
import differenceOfTwo from "./subtract.js";
import division from "./division.js";
// Showbanner("Calculator")

let answers = await inquirer.prompt([
{
    name: "firstNumber",
    type: "number",
    message: "Enter First Number: "
},
{
    name: "secondNumber",
    type: "number",
    message: "Enter Second Number"
}
])



console.log(chalk.green(`Sum of Two numbers is : ${sumOfTwo(answers.firstNumber,answers.secondNumber)}`));

console.log(chalk.bgBlackBright(`Multiply of Two numbers is : ${productOfTwo(answers.firstNumber, answers.secondNumber)}`))

console.log(chalk.underline.bgBlue(`Subtraction of Two numbers is :${differenceOfTwo(answers.firstNumber, answers.secondNumber)}`))
console.log(chalk.red(`Division of Two numbers is : ${division(answers.firstNumber, answers.secondNumber)}`))


console.log(chalk.red("Hello world"))
console.log("Hello world")
console.log(chalk.bgBlueBright("Hello world"))
console.log('Hello', chalk.underline.bgBlue('world') + '!')