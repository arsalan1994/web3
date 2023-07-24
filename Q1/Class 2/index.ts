"use strict";
// ==================Arithmetic operators==============
// in bellow line i'm tring to addition 3 values
let na1 = 23; // 1st variabe 
let na2 = 32; // 2nd variable
let na3 = 5; // 3rd variable
let sum = na1 + na2 + na3; //adding numbers using the +operator.
console.log(`Sum of ${na1} + ${na2} + ${na3} = ${sum}`); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to subtraction 3 values
let ns1 = 100; // 1st variabe 
let ns2 = 35; // 2nd variable
let ns3 = 5; // 3rd variable
let sub = ns1 - ns2 - ns3; //subtraction numbers using the -operator.
console.log(`Subtraction of ${ns1} - ${ns2} -${ns3}  = ${sub}`); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to multiply 2 values
let nm1 = 15; // 1st variabe 
let nm2 = 2; // 2nd variable 
let mul = nm1 * nm2 * 2; //multiplication numbers using the *operator.
console.log(`Multiplication of ${nm1} * ${nm2} * 2  = ${mul}`); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to division 2 values
let nd1 = 120; // 1st variabe 
let nd2 = 2; // 2nd variable 
let div = nd1 / nd2; //division numbers using the +operator.
console.log(`division of ${nd1} / ${nd2}   = ${div}`); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to use difference operators
let n1 = 3; // 1st variabe 
let n2 = 2; // 2nd variable 
let val = ((((n1 + n2) * (n1 - n2) * 40) / 4) + 50) - (80 / n2); //division numbers using the +operator.
console.log(`Result of ((((${n1} + ${n2}) * (${n1} - ${n2})  * 40 ) / 4) + 50 ) -( 80 / ${n2}) =  ${val}`); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to use Modulus operators
let modulus1 = 1707; // 1st variabe 
let modulus2 = 61; // 2nd variable 
let mod = modulus1 % modulus2; //division numbers using the +operator.
console.log(`Result of ${modulus1} % ${modulus2} = ${mod}`); // Output:60
// ==================Assignment operators==============
let naa1 = 25;
naa1 += 5;
console.log(`After addition : ${naa1}`); //Output:30
let nas1 = 35;
nas1 -= 5;
console.log(`After subtraction : ${nas1}`); //Output:30
let nam1 = 6;
nam1 *= 5;
console.log(`After Multiplication : ${nam1}`); //Output:30
let nad1 = 150;
nad1 /= 5;
console.log(`After Division : ${nad1}`); //Output:30
let namod1 = 1735;
namod1 %= 31;
console.log(`After Division : ${namod1}`); //Output:30
// ==================Comparison Operators==============
let nc1 = 2;
let nc2 = 3;
let result = nc1 == 1;
console.log(result); // false, because it is not equal and both are different data types
result = nc2 == 3;
console.log(result); // true
result = nc2 == 3 && nc1 == 2;
console.log(result); //true, because both 3 == 3 and 2 == 2 are true
result = nc2 == 3 && nc1 == nc2;
console.log(result); //false, because 3==3 true but 2 == 3 is false
result = nc2 == 3 || nc1 == nc2;
console.log(result); //true, because 3==3 true but 2 == 3 is false. and we are use OR operator so i ant one is true , our result is true
result = nc2 != 3 || nc1 == nc2;
console.log(result); //false, because 3!=3 false and  2 == 3 is als false.
result = !(nc2 != 3 || nc1 == nc2);
console.log(result); //true, because 3!=3 false and  2 == 3 is als false. but here i use not operator on whole condition
result = (!(3 == 3) && 2 == 2);
console.log(result); //false, because 3 ==3  true but !(true) = false and  2 == 2 is  true. but here i use not operator with on condition
result = (!(!(3 == 3)) && 2 == 2);
console.log(result); //true, because 3 ==3  true but !(true) = false and !(flase) = true and  2 == 2 is  true. but here i use not operator on not operator with on condition
result = (nc1 < nc2);
console.log(result); //true, because 2 < 3 
result = (nc1 < nc2 && nc1 > 0);
console.log(result); //true, because 2 < 3  and 2<0
result = (nc1 < nc2 && nc1 < 0);
console.log(result); //false, because 2 < 3  and 2 < 0