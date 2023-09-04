let BMW = {model:2030, mileage:2000, color:"Black"}

lexus = {model:2030, mileage:2000}  `Fresh`

lexus = BMW //`stale` object

//A type can include an `index signature` to explicitly indicate that excess properties are permitted in with fresh objects:

 var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
 x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature


 *********************************
 `Union` let x : string | number 

 ********************************
 `Intersaction`
 let variable : string | number 

interface abc  {
    model : number,
    make : string
}
interface xyz {
    campany : string,
    brand : string
}
type neww = abc & xyz; //`Intersaction`

let final :neww = {
    model : 123,
    make : "2023",
    campany : "Audi",
    brand : "Audi"
}

**************************************

// ===============================
//`Any` Kuch bhi value daal sakty ho
let myval: any;

// ===============================
//`Unknown`
let myval: unknown;
koi bhi value assign karo gy error dy ga jb tak type variable ki nikalo gy nahi tb tak
// ===============================
`never` error dy ga hr time kuch bhi kr lo
let newDataType :never;

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
    let i =0;
    while (true) {
        console.log(i)
        i++;
    }
  }
  infiniteLoop()