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