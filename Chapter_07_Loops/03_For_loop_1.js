/* For Loop -> For loops heps to repeat a block of code based on 3 important things
ICU 
Initialization , Condition , Updation

*/

for (i=0 ; i<5 ; i++){
    console.log(i);
}

// Suppose if we use Pre-increment then the output still remains the same 
// since the Pre& Post increments are used on the last line hence  no change will be seen

for (i=0 ; i<5; ++i){
    console.log(i); // Here the loop executes 10 times and prints from 0 to 9
}

// WE can also write the For loop by directly initializing inside the for loop

for (let _1=0 ; _1<=10 ; _1++){
    console.log ("--------------------------------------------------")
    console.log(_1) // Here the loop executes 11 times and prints from 0 to 10
}

// If we dont assign the Condition then the for loop will be eecuted infinite times

// for(let san=0 ; ; san++){
//     console.log(san);
// }

// Suppose if we dont assign the value at the time of initialization then the output is Falsy and will not be printed

for (let san ; san<2 ; san++){
    print(san); // Output will not be printed since we have not initialized any value to san
}

// Suppose if the assigned value is not matching with the condition then the output is Falsy and will not be printed

for (san = 0 ; san>1 ; san++){
    console.log(san);
}