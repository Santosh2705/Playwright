// // We can write if stattements in a single line

// if ("hello") console.log("String is truthy");
// if (18) console.log("Numbers are truthy");
// if ([]) console.log("Print empty arrays");
// if ({}) console.log("Print Object");

// //false statements which will not be printed
// if (undefined) console.log("Print Undefined"); // False : Will not be printed
// if (0) console.log("Print Zero") // Will not be printed
// if ("") console.log ("Print null"); // False: Null values wont be printed
// if (null) console.log ("Print null defined"); //False: Null values wont be printed
// if (NaN) console.log("Print NaN values"); // False: NaN values wont be printed

//case:1 
if ([]){
    console.log ("Its an empty array");
}
// If we do not pass anything inside the array then the value is considered as truthy

// case:2 -> Shoule I use if(response) or if (response !==null)

let response;
if (response){
    console.log ("Response Output")
}

let response_1;
if (response_1 !== null){
    console.log("Response_1 Output")
}
// Always use the response_1 !== null, 
// since if we directly use the response wihtout the comparing with the null then the output will be vulnerable 
// since we might get "0" or "false" then in that case the code executes the if statment without comparing the value
// This response is only legitimate when we use API

//Case :3 
/* 
What is the difference between x==5 and x===5 in tetsing?
Always use "===" (strict equality) in tests
*/
