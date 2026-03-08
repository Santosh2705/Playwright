// To While -> Nothing but it will run the code atleast once before exiting the loop

/* Syntax 
initialization ;

do {
    Execution
} while (Condition)

*/

// Example Login Attempts:

// let login_attempt = 0;

let login_attempt = 0;

do{
    console.log("Login Attempt: ", login_attempt);
    login_attempt++
}while(login_attempt<3)

// Example of do while if the condition is not satisfied

let b = 20;

do{
    console.log(b);
    b++
}while(b<20)
