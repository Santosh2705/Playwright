// let arr = [1,2,3,4];

// // To add elements into the array use "push" keyword
// arr.push(5);
// console.log(arr);

// // To add multiple elements into the array

// arr.push(6,7,8);
// console.log(arr);

// // To remove the elements from an array use "pop"
// // "pop" will remove the last element from an array

// arr.pop();
// console.log(arr);

// // To add the elements in the Beginning of an array use "unshift" keyword

// arr.unshift(0);
// console.log(arr);

// // To remove the value from the beginning of an array use "shift" keyword
// arr.shift();
// console.log(arr);

// Splice - Used to Add and remove the elements from an array
let numbers = [1,2,3,4,5,6];
numbers.splice(4,1)// Here at the 4th index we are removing once value
console.log(numbers);

let num = [1,2,3,4,5,6];
num.splice(2,0);
console.log(num);

let add = [1,2,3,4,5,6];
add.splice(2, 0, 10, 11);
console.log(add)

let browsers =["Chrome","safari","firefox", "edge", "opera"]
console.log(browsers);
console.log("Total length of the browsers:", browsers.length);
browsers.pop(); // To remove the last element of an array
console.log("Array Output after using pop function:", browsers);
browsers.shift(); // Remove the first element of an array
console.log("Array output after using shift function:", browsers)

console.log("------------------------------------------")

// Using for loop
for (i=0 ; i<browsers.length; i++){
    //console.log(browsers[i]);
    if (browsers[i] === "safari"){
        console.log("Safari browser is present!!!")
    }
}else{
        console.log("Browser is removed")
    }

