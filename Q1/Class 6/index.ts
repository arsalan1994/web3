import chalk from "chalk";
import showBanner from "node-banner"
// console.log(chalk.bgBlue("Hello World"))

// showBanner('The Title', 'This is a suitable tagline');


let userName : string | number | null = "Arsalan";

userName = null
userName = "Arsalan"
// userName = 27

// console.log(chalk.blue(userName))


// console.log(Math.random() > 0.6 ? `${Math.random()} yes`:`${Math.random()} no` )

// console.log(typeof userName === 'string' ? userName.toUpperCase() : "not string")

let a= 0.23323;
 console.log(a.toFixed(1))


function abc (amount : number | string | boolean){
    if(typeof amount === "string"){
        // console.log(amount.toLowerCase())
    }if(typeof amount === "number"){
        // console.log(amount / 100);
    }else{
        // console.log("boolean")
    }
}

abc('Arsalan')

let sa ,sb = 2;
// console.log("******************")
// console.log(sa==sb ? "yes" : "no")





// *******************************************************
// TYPE Aliases
// *******************************************************

let varable : string | number | boolean ;

type ourNewType = string | number | boolean ;

let myName:ourNewType = 3

// console.log(typeof myName)

// *******************************************************
// OBJECTS
// *******************************************************


// console.log(`*******************************************************
// OBJECTS
// ******************************************************* `)
let carObj = {
    model: 2023,
    color : "black",
    brand : "Audi",
    "Fuel Avg" : "15km"
}


// console.log("Object print",carObj.brand)
// console.log("Object print",carObj["Fuel Avg"])

// console.log("****************Nested Objects***************")

let person = {
    firstName : "Arsalan",
    LastName : "Saajad",
    gender : "Male",
    address :{
        HNo :"ass",
        stNo : 2
    }
}

type addressType = {
    houseNo : number,
    streetNo : string,
    city : string,
    country : string
}

// console.log("*********************TASK***************")

showBanner("Registration Form")
import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        name : "userName",
        type : "input",
        message : "Enter your First Name"
    },
    {
        name : "ContactNumber",
        type : "number",
        message : "Enter your Contact Number",
    },
    {
        name : "gender",
        type : "checkbox",
        message : "Enter the gender",
        choices : ["Male", "Female"]
    },
    {
        name : "CNIC",
        type : "input",
        message : "Enter Cnic"
    }
    
])

let address = await inquirer.prompt([
    {
        name : "StreetNumber",
        type : "input",
        message : "Enter Street Number"
    },
    {
        name : "City",
        type : "input",
        message : "Enter City"
    },
    {
        name : "StreetNumber",
        type : "input",
        message : "Enter Street Number"
    }
])


console.log(chalk.green(`First Name ${answers.userName}`))
console.log(chalk.blue(answers.ContactNumber))


