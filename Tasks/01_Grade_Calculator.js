/* Grade Calculator
A: 90 - 100
B: 80 - 89
C: 70  - 79 
D: 60 - 69
E: 0 -59
*/

// let student_marks = "34";

// if (typeof student_marks!== "number"){
//     console.log("Please enter the valid Student marks and then verify the Grade!!!");
//     return;  // If we perform return operation then the next following piece of code will not be executed
// }

// if (student_marks < 0 || student_marks > 100){
//     console.log("Please enter the marks more than 0 and less than 100 Please!!!");
//     return;
// }

// if (student_marks >= 90){
//     console.log ("Student has passed with A Grade")
// }
// else if (student_marks >=80 && student_marks<=89){
//     console.log ("Student has passed with B Grade")
// }
// else if (student_marks >=70 && student_marks<=79){
//     console.log ("Student has passed with C Grade")
// }
// else if (student_marks >=60 && student_marks<=69){
//     console.log ("Student has passed with D Grade")
// }
// else if (student_marks <=59){
//     console.log ("Student has passed with D Grade")
// }
// else{
//     console.log("Please entr valid student marks")
//}

// Another way of writing the code for the above problem statement

let score = 12;

if (typeof score !== "number"){
    console.log("Please enter the valid score to judge the grade!!!");
    return;
}

if (score<0 || score>100){
    console.log("Please enter the score of the student either more than 0 or less than 100");
    return;
}

if (score >= 90){
    grade = "A";
}

else if (score >=80){
    grade= "B";
}
else if (score >=70){
    grade="C";
}
else if (score >=60){
    grade = "D";
}
else if (score <=59){
    grade = "E";
}
//console.log("Student who secure the marks of :", score, "has been passed with the Grade :", grade);
console.log(`Student who secured the score ${score}, has been provided with the Grade ${grade}`);
