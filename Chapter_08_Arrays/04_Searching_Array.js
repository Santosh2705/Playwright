// Searching functionality in the array

let results = ["pass", "fail", "pass", "error","fail"];
console.log(results.indexOf("pass")); // Returns the first index else retruns -1
console.log(results.indexOf("fail"));
console.log(results.indexOf("error"));
console.log(results.indexOf("sucess")); // here the output will be "-1" since "success" is not define in the array


// Includes functinality -> Always returns the boolean value
console.log(results.includes("pass")); // Output will be true
console.log(results.includes("success")); // output willl be false since succces is not defines in an array


// find functionality -> Returns the first matching element in the array
let numbers = [10,20,30,40,50]
console.log(numbers.find(x => x>20)); // Here the output is 30 since find returns the first matching element
console.log(numbers.findIndex(x => x>20)); // Here the output is 2 since the Index of the first matching element is 2
console.log(numbers.findIndex(x => x=0)); // Here the output will be -1 since the value is not matching with the array
console.log(numbers.findLast(x => x>20)); // Here the output will be 50 since the last matching of the array is 50 for the expression provided
console.log(numbers.findLastIndex(x => x>30)) // Here the output will be 4 since the last matching value is 50 which is located in index 4

