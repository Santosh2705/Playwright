let username = "santosh";
let password = "secure123";
let isAccountlocked = true

if ((username == "santosh" && password == "secure123") && !isAccountlocked){
    console.log("User is allowed")
}
else{
    console.log("User is not allowed")
}

/* Grade Calculator
A: 90 - 100
B: 80 - 89
C: 70  - 79 
D: 60 - 69
E: 0 -59
*/

let student_marks = 32;

if (student_marks >= 90){
    console.log ("Student has passed with A Grade")
}
else if (student_marks >=80 && student_marks<=89){
    console.log ("Student has passed with B Grade")
}
else if (student_marks >=70 && student_marks<=79){
    console.log ("Student has passed with C Grade")
}
else if (student_marks >=60 && student_marks<=69){
    console.log ("Student has passed with D Grade")
}
else if (student_marks <=59){
    console.log ("Student has passed with D Grade")
}
else{
    console.log("Please entr valid student marks")
}

/* Program to determine the type of Traingle:
 -> If all sides are equal -> Equilateral traingle
 -> If 2 sides are equal -> Isosceles
 -> If no sides are equal -> Scalene
*/

let a = 10;
let b = 50;
let c = 20;

if (a==b && b==c){
    console.log ("Equilateral Traingle")
}
else if (a==b && b!=c){
    console.log("Isoceles Traingle")
}
else if (a!= b && b!=c){
    console.log("Scalene Traingle")
}
else{
    console.log ("Kindly enter valid data to determine the traingle")
}

/* Program to verify the Leap year Checker
A leap year is divisible by 4 but not by 100 unless it is also divisble by 400 
*/

let year = 2000;
let leap_year = (year/4)

if (leap_year == 0){
    console.log("Leap Year")
}
else if (leap_year !=0){
    console.log("Not an Leap year!")
}
