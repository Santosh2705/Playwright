var a = 10 // Global variable and also variable declared with var is function scoped

//console.log(a);

/*
Function is a resuable block of code that can be performed multiple times.
 It can take some input and return some output. It is a building block of any programming language.

 Function has 2 parts 
 1. Defining a function
 2. Calling a function
 */

/* Defining a function
 function printhello() {
   console.log("Hello World");
   var a = 20;
   console.log(a);
   if (true) {
     var a = 30;
     console.log(a);
 }
 console.log("Focus ->", a);
}

 //calling a function
 printhello(); 

 */

 let b = 20 // Global variable and also variable declared with let is block scoped
 console.log(b);

 function printhello() {
    let b = 30;
    console.log(b);
        if (true) {
            let b = 40;
            console.log(b);
        }   
    console.log("Focus ->", b);
}

//calling a function
printhello();

const pi = 30 // Global variable and also variable declared with const is block scoped and also it cannot be reassign
console.log(pi);
pi= 40