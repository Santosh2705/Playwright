// Switch statemnts are used to minimize the execution performance of the code when compared with the If else statements

/* Syntax 
switch (expression){
case : value
break
}

Switch statement is only used to validate the specific values
* If we want to use Comparison operators then always use If Else statements

* If we still want to use Comparison operators then we need to use switch (true)
In this pattern, each case evaluates a boolean expression.
If the expression becomes true, that case will execute.

* If we do not use the Break statement then the output of all the case values will be printed, hence using break statment is mandatory

* Using default statemment at the end of the switch statment is not mandatory

/*
Print the exact day
0 - Sunday
1 - Monday
2 - Tueday
3 - Wednesday
4 - Thursday 
5 - Friday
6 - Saturday
*/

let day = 12;
switch (day){
    case 0:
        console.log("Sunday");
        break;
    
    case 1:
        consoloe.log ("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    
    case 3 :
        console.log("Wednesday");
        break;
    
    case 4:
        console.log("Thurday");
        break;
    
    case 5:
        console.log("Friday");
        break;
    
    case 6:
        console.log("Saturday");
        break;
    
    case 7:
        console.log("Sunday");
        break;
    
    default:
        console.log("Invalid date");


}

let student_marks = 94;

switch (true){
    case student_marks >= 95:
        console.log("Student has passed with Distinction");
        break;
    case student_marks >= 60:
        console.log ("Student is passed with First class");
        break;
    case student_marks >=35:
        console.log("Student has passed with Second class");
        break;
    case student_marks < 35:
        console.log("student is failed");
        break;
    default:
        console.log("Enter the valid student marks to validate")

}