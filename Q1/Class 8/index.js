"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myname = 5555;
// if(typeof myname == "string"){
//     myname.length;
// }
console.log(myname.length);
console.log(typeof myname);
// let num = '15';
// num.length;
// console.log((<string> myname).length)
let newValue = myname.toString(); // "5555"  // type converstion
console.log(typeof newValue, newValue);
let name1 = 54655;
if (typeof name1 == "string")
    name1.toString();
//==================================
// ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //starts with 0
var c = Color.Blue;
// console.log(c)
// enum matchResult {
//   win2 = "win",
//   lose = "lose",
//   draw = "draw",
// }
// let indScore = 200;
// let pakScore = 201;
// if (pakScore > indScore) {
//   console.log(`Pakistan ${matchResult.win2}`);
// } else if (indScore > pakScore) {
//   console.log(`Pakistan ${matchResult.lose}`);
// } else {
//   console.log("Match" + matchResult.draw);
// }
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var colorName = Color1[2];
console.log(colorName);
