let myname = 5555;
// if(typeof myname == "string"){
//     myname.length;
// }
console.log((myname as unknown as string).length);
console.log(typeof myname);

// let num = '15';

// num.length;
// console.log((<string> myname).length)
let newValue = myname.toString(); // "5555"  // type converstion

console.log(typeof newValue, newValue)

let name1 : unknown =  54655;
if(typeof name1 == "string")
name1.toString()

//==================================

// ENUM

enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
var c: Color = Color.Blue;

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

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
var colorName: string = Color1[2];
console.log(colorName);