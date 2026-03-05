// // Ternary Operator = condition ? "true result" : "false result"

// let age = 20;

// let major_minor_decision = age > 18 ? "Major" : "Minor";
// console.log(major_minor_decision);

// let age_1 = 60;
// let mom_age = age_1 >=60 ? "Mom is a senior citizen" : "Mom is not a senior citizen";
// console.log (mom_age);

// let name = "santosh";
// let course_attending = name == "santosh_1" ? "Santosh is attending the class" : "Santosh is absent";
// console.log (course_attending)

// let virat = "Cricketer"
// let virat_profession = virat == "Cricketer" ? "Virat : The Legend in Cricket sport" : "Virat is not a cricketer";
// console.log (virat_profession) // Ouput -> "Virat : The Legend in Cricket sport"

// let virat_1 = "Hockey_Player"
// let virat_profession_1 = virat_1 == "Cricketer" ? "Virat : The Legend in Cricket sport" : "Virat is not a cricketer";
// console.log (virat_profession_1) // Ouput -> ""Virat is not a cricketer"

// let voting_age = 12;
// let india_voting_age = voting_age >=18 ? "Citizen is eligible to vote" : "Not eligible"
// console.log(india_voting_age)

// let area = "Chennai";
// let santosh_area = area == "Bangalore" ? "Santosh belongs to Bangalore location" : "Santosh is a non Bangalorean";
// console.log (santosh_area);

let age = 18;
let voter_age = age>=18 ? "Right to vote" : "Minor: Not eligible";
console.log(voter_age);

// Ternary Operators using multiple conditions:
//Example 1:
let status_1 = "active";

let msg = status_1 === "active" ? "User is Active"
        : status_1 === "inactive" ? "User is Inactive"
        : status_1 === "banned" ? "User is banned"
        : "Unknown Status";
console.log(msg);

//Example 2:
let status_code = 200;

let status_code_validation = status_code = 200 ? "API Success Response"
                            : status_code = 400 ? "API Response is Bad Request"
                            : status_code = 404 ? "API Response is 404"
                            : "Kindly define proper API Status_Code";
console.log(status_code);

//Example 3:
let name_1 ="" ? name_1 = "Has Name" : "No Name"
console.log(name_1) // Falsy Condition since the name is passed has null hence No name will be printed
