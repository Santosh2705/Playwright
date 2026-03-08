/*Increments -> Pre and Post increments

* Pre-Increments: Increment me first and then assign the value
* Post-Increment: Assign the value then increase me.

*/

//Incremnts
// Examples of Pre-increments

let a = 10;
let b= ++a;
console.log(b);
console.log(a);

//Examples of Post Increment
let a1 = 10;
let b1 = a1++;
console.log(b1);
console.log(a1);

let x = 10;
console.log(x++ + x)
// Here the fist logic is if we split as A+B 
// where A = x++
// Now B = x where the value of a is incremented to 11
// Hence the output will be 21

let y = 10;
console.log(y++ + ++y);
console.log(y);
// Here the fist logic is if we split as A+B 
// where y = y++
// Now B = y where the value of a is incremented to 11
// Hence the output will be 22

let z = 10;
console.log(++z + ++z);
console.log(z);
