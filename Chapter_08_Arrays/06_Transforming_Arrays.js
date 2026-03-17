// Array Transforming 

// We will be using map function for transforming the exisiting array into a new array

let scores = [45,56,70,80,79,12];

let grades = scores.map(score => score>=35 ? "Pass": "Fail");
console.log(grades)

console.log("------------")

// Filter function -> Filter is used to reduce the value

let filtered_value = scores.filter(score => score<=35)
console.log(filtered_value)