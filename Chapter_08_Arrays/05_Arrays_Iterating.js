// Iterating -> Traversing the data

let test = ["login", "checkout", "search"];

for (let i=0 ; i< test.length; i++){
    console.log(test[i]);
}

console.log("---------------------");

// Another way of writing the for loop

for (let i of  test){
    console.log(i);
}
console.log("-------------------")

// Using for each loop
test.forEach((test, index) => {
    console.log(`${index} : ${test}`);
})
console.log("--------------------------")

// Another example using for each loop
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days.forEach((days, index) => {
    console.log(index, days)
})

console.log("-------------------------------")

let students = ["ABC", "BCD", "VFG", "JUII"];

for(let student in students){
    console.log(student , ":"  + students[student])
}
