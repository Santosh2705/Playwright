// If Else Statements

let santosh_age = 37;

if (santosh_age > 18) 
{
    console.log ("Santosh can vote in India")
    
}
else {
        console.log ("Santosh is minor, He can't vote")
    }

// If * Else If statments

let age_1 = 12;

if (age_1 > 35){
    console.log("Go to Goa and drink");
}
else if (age_1 >= 18 && age_1 < 25){
    console.log ("GO to goa but drinking is not allowed");
}
else {
    console.log ("Not eligible to travel to Goa")
}

//Exmaple of If_Else IF by judjing the marks of the student and assigning the class
let score = 36.56;

if (score >= 90){
    console.log("Passed with distinction");
}
else if (score >=60 && score < 75){
    console.log("Passed with First class");
}
else if (score >=45 && score < 60){
    console.log("Passed with Second class");
}
else if (score >= 35 && score <45){
    console.log("Passed with the Third clss");
}
else {
    console.log("Student is failed");
}