interface cars {
    mileage : number,
    model : number
}

let lexus : cars ={
    mileage :2000,
    model : 2025
}

function EngineEfficiency(car : cars){

    let calculation = car.mileage * car.model;

    return calculation
}

console.log (EngineEfficiency(lexus));

interface Bikes {
    model : number;
    mileage : number
}


let H2r : Bikes ={
    mileage :200,
    model :2021
} 
console.log (EngineEfficiency(H2r))

interface Plane {
    mileage:number,
    model : number,
    speed : number
}

let Jf17 : Plane ={
    mileage :2,
    model:3,
    speed:500
}
console.log (EngineEfficiency(Jf17))

lexus = Jf17  
// Jf17 = lexus

interface Bus {
    model: number,
    engine_mileage : number
    mileage :string
}

let busObj : Bus ={
    model :2021,
    engine_mileage : 1500,
    mileage : "too much"
}

//  EngineEfficiency(busObj) //Milage string hy iss lihy error aahy ga

// ==================================

let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2,  name: "Tom" };
//Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type


//Case 2a
// myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property
//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature
// //Case 3
// myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property

var x: { id: number, [x: string]: any };

//  [x: string]  key/Name
// any 

x = {id:12, firstName:"Usman" }

let y = {id:500, address:"ISB"}

let Z = {id:500, area:500}

x = y  

x = Z
// y = Z

// y = x

// ========================================

// Union 

let variableType : number | string;

variableType =8;
variableType ="Eigth"
// Intersection

interface Student {
    student_id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}

type intersected_type = Student & Teacher;
    
let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
    
console.log(obj1.teacher_Id);
console.log(obj1.name);

// ===============================


// ===============================
//Any
let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK
myval=myval+2;


//Unknown
let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK

if(typeof value  == "string"){
    value=value+2;
}

let newDataType :never;


function error(message: string): never {
   
    console.log("laskl");
    console.log("laskl");
    console.log("laskl");
    console.log("laskl");
    console.log("laskl");

      throw new Error(message);
  }
//   let result = error("askjas");

// console.log(result)
  // Function returning never must not have a reachable end point
function infiniteLoop(): never {
    let i =0;
    while (true) {
        console.log(i)
        i++;
    }
  }
  infiniteLoop()