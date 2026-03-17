// Arrays " Arrays are nothing but the collection of values. JS arrays are dynamic and can hold mixed values."

// Empty array:
let fruits = []; // Empty array

// Arrays can be created using a set of strings
let fruits_fresh = ["apple", "banana", "Cherry"];
// Here arrays works with the index and starts from 0, 1,2 -> Where 0 -> apple, 1 -> banana , 2 -> Cherry

// Arrays can be created using set of numbers
let arr = [10,20,30,40]; // Here the index starts from 0-3

// Arrays can have duplicate values:
let test_results = ["pass", "fail", "pass", "skip"];

//Arrays can hold any type of values -> Heterogenous
let mixed = [1, "hello", true, null];

// How to create an array:
let browsers = ["Chrome", "firfox", "edge"];

// To determine the length of an array:
let array = [10,20,30,40,50];
console.log(array.length);
console.log(array[0]); // To print the value of particular index
console.log(array[3]); // To print the value of particular index
console.log(array[4]); // To print the value of particular index
console.log(array[5]); // If the array is not not defined then the output is Undefined

// Array constructors
// new keywrod is used to create a new type of Arrays automatically w.r.t the index provided

let score = new Array(100,200,300,400);
console.log(score);

// Another way of creating an array using "of" function inside the Array

let num = Array.of(10,20,30,40,50,60);
console.log(num);

// Another way of creating a new Array using from

let chars = Array.from("hello"); // Here if we use from it will divide all the characters and then provides the split o/p
console.log(chars);
