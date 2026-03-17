/*
Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
The program should retry a maximum of 5 times. 
Simulate random success/failure using Math.random() 
(40% chance of success: randomValue > 0.6). 
Log each attempt and print the final result.
*/

let response_code = 0;

do{
    Math.random();
    console.log("API Response attempt: ", response_code);
    response_code++

}while(response_code<=5)