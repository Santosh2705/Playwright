// Accessing and Modifying the array
// Directly declare an array []
// If we use keywords like from, new , at - > use ()

let behave = ["Good", "Better", "Best"];
console.log(behave)
console.log(behave[0]); // Output : Good

// To print the last value of the Array we need to use the "at" function in the array
console.log(behave.at(-1));  // Output will take the last value of the array: Best
console.log(behave.at(-2)); // Output will be the second value from the last : Better
console.log(behave.at(-4)); // Output will be undefined

// Modifying the array

let sant = ["Student", "Employee", "Family"];
console.log(sant)
sant[0] = "Son"; // Here the array will replace the first index 
sant[1] = "Engineer" // Here the array will replace the second index
sant[2] = "Devotee" // Here the array will replace the third index
console.log(sant);
console.log(sant.length)