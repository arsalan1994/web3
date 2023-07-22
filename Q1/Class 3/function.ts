// =============================================

// Functions 

// types
// 1 : No input no output

function printMessage(){
    console.log("No input no output function")
}

printMessage();
// printMessage();
// printMessage();


// 2 : Pass input no output

function function_no_output(userName:string){
    console.log(`My Name is ${userName} this is pass input no input function`)
}

function_no_output("Arsalan sajjad Touqeer")
let res = function_no_output("Arsalan sajjad Touqeer");
console.log(`pass input no input function value : ${res}`)

// 2 : Pass input with output

function function_with_output(userName:string){
    var msg = `My Name is ${userName} this is pass input no input function`;
    return msg;
}

let res2 = function_with_output("Arsalan Sajjad Touqeer")

console.log(`pass input with input function value : ${res2}`)
