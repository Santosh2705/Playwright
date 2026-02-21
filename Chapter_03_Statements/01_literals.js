// let x = 10; // This is a numeric literal
// let y = "Hello, World!"; // This is a string literal
// let z = true; // This is a boolean literal  
// let a = 0xff; // This is a hexadecimal numeric  literal
// let b = 0b1010; // This is a binary numeric literal
// let c = 0o12; // This is an octal numeric literal
// let d = null; // This is a null literal
// let e = undefined; // This is an undefined literal

// //Single quotes
// let string_example = 'This is my first string';

// //Double quotes
// let string_example2 = "This is my second string";

//Template literals
let name = "Santosh";
let full_name = `My full name is ${name} kumar`
console.log(full_name);

let age = 37;
let complete_age_info = `My age is ${age} yeard old`;
console.log(complete_age_info);

let math = `2+1 = ${2+1}`; 
/* Here there are two expression, the first 2+1 is the string and the 
second 2+1 is the expression which will be evaluated 
and the result will be concatenated with the string
*/
console.log(math);

let mother_name = "satya";
let mother_fulname = `My Mother full name is ${mother_name} vathi`;
console.log(mother_fulname);

// To store the path of the file
let file_path = "D:\\Santosh\\Documents\\JavaScript\\Chapter_03_Statements\\01_literals.js";
console.log(file_path);

// To store the URL's of the website
let website_url = "https://www.google.com";
console.log(website_url);

/*
In Javascript if we use //-> then we indicate this as an URL 
If we use \\ then we indicate this as an file path
Please note that to define the file path we need use double backslash (\\) 
because single backslash is used as an escape character in Javascript
*/