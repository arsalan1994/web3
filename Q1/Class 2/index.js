"use strict";
// ==================Arithmetic operators==============
// in bellow line i'm tring to addition 3 values
var na1 = 23; // 1st variabe 
var na2 = 32; // 2nd variable
var na3 = 5; // 3rd variable
var sum = na1 + na2 + na3; //adding numbers using the +operator.
console.log("Sum of ".concat(na1, " + ").concat(na2, " + ").concat(na3, " = ").concat(sum)); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to subtraction 3 values
var ns1 = 100; // 1st variabe 
var ns2 = 35; // 2nd variable
var ns3 = 5; // 3rd variable
var sub = ns1 - ns2 - ns3; //subtraction numbers using the -operator.
console.log("Subtraction of ".concat(ns1, " - ").concat(ns2, " -").concat(ns3, "  = ").concat(sub)); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to multiply 2 values
var nm1 = 15; // 1st variabe 
var nm2 = 2; // 2nd variable 
var mul = nm1 * nm2 * 2; //multiplication numbers using the *operator.
console.log("Multiplication of ".concat(nm1, " * ").concat(nm2, " * 2  = ").concat(mul)); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to division 2 values
var nd1 = 120; // 1st variabe 
var nd2 = 2; // 2nd variable 
var div = nd1 / nd2; //division numbers using the +operator.
console.log("division of ".concat(nd1, " / ").concat(nd2, "   = ").concat(div)); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to use difference operators
var n1 = 3; // 1st variabe 
var n2 = 2; // 2nd variable 
var val = ((((n1 + n2) * (n1 - n2) * 40) / 4) + 50) - (80 / n2); //division numbers using the +operator.
console.log("Result of ((((".concat(n1, " + ").concat(n2, ") * (").concat(n1, " - ").concat(n2, ")  * 40 ) / 4) + 50 ) -( 80 / ").concat(n2, ") =  ").concat(val)); // Output:60
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// in bellow line i'm tring to use Modulus operators
var modulus1 = 1707; // 1st variabe 
var modulus2 = 61; // 2nd variable 
var mod = modulus1 % modulus2; //division numbers using the +operator.
console.log("Result of ".concat(modulus1, " % ").concat(modulus2, " = ").concat(mod)); // Output:60
// ==================Assignment operators==============
var naa1 = 25;
naa1 += 5;
console.log("After addition : ".concat(naa1)); //Output:30
var nas1 = 35;
nas1 -= 5;
console.log("After subtraction : ".concat(nas1)); //Output:30
var nam1 = 6;
nam1 *= 5;
console.log("After Multiplication : ".concat(nam1)); //Output:30
var nad1 = 150;
nad1 /= 5;
console.log("After Division : ".concat(nad1)); //Output:30
var namod1 = 1735;
namod1 %= 31;
console.log("After Division : ".concat(namod1)); //Output:30
// ==================Comparison Operators==============
var nc1 = 2;
var nc2 = 3;
var result = nc1 == 1;
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
