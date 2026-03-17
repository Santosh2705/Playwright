// // Array Creation
// let arr = ["ganesh", true, 4, "pass", "fail", "pass"];
// console.log(arr)
// console.log("Total length of an array:", arr.length); 
// console.log(arr[0]); // To determine the index of the array


// // Array Constructors

// let numbers = new Array("Ganesh", "pass", "Fail",123, true)
// console.log(numbers);

// // Using of function in the Array
// let num = Array.of("Ganesh", "pass", "Fail",123, true)
// console.log(num)

// //Using "for" function for dividing each of the string displayed
// let numb = Array.from("1234")
// console.log(numb)

// // usign at funnction
// let behave = ["Good", "bad", "Best"];
// console.log(behave.at(0));
// console.log(behave.at(1));
// console.log(behave.at(2));
// console.log(behave.at(3));

// // Modifying the array
// let santosh = ["Student", "Employee", "Family"]
// console.log(santosh);
// santosh[0] = "Son"
// console.log(santosh)

// // Adding an element into the array
// santosh.push("devotee");
// console.log(santosh)

// // TO remove the element usign array use pop
// santosh.pop()
// console.log(santosh)

// // Unshift - used to add the element in the beginning of an array
// let legends = ["Virat", "Rohit", "MS"];
// legends.unshift("Sachin");
// console.log(legends);

// // Use Shift to remove the first element of an array
// legends.shift();
// console.log(legends.at(0))

// let char = new Array("Best", "Super", "Good")
// console.log(char)

// let char1 = ["Best", "Super", "Good"];
// console.log(char1)

// let char2 = Array.of("Best", "Super", "Good");
// console.log(char2)

// Another way of writing for loop

browser = ["chrome", "safari", "edge", "opera", "firefox"]

for (let i of browser){
    console.log(i);
}

console.log("--------------------------")

// for each loop
browser.forEach((browser, index) => {
    console.log(`${index} : ${browser}`)
})

console.log("--------------------")
// Another way of for each loop

let identity = ["Santosh", "Vijay", "Vikarm"]
identity.forEach((identity, index) => {
    console.log(`${index} : ${identity}`)
})

