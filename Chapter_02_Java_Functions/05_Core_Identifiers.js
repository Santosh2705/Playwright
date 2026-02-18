// Identifiers, Literals and Constants in JavaScript

var a = 10; // a is an identifier and 10 is a literal
a=20;
console.log(a);

//Rules for Identifiers in JavaScript
//1. An identifier can only contain letters, digits, underscores, and dollar signs.
//2. An identifier must begin with a letter, an underscore, or a dollar sign.
//3. An identifier cannot be a reserved word in JavaScript.
//4. An identifier is case-sensitive.

var _name = "John"; // valid identifier
var $age = 30; // valid identifier
var _name="test"; // valid identifier

var _b = "test"; // invalid identifier because break is a reserved word in JavaScript
console.log(_b);


/*Literals in JavaScript are the values that are assigned to variables. 
They can be of different types such as string, number, boolean, null, undefined, etc
*/