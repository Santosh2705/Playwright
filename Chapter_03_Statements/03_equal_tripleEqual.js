// Double Equal (==) and Triple Equal (===) in JavaScript

/* Double Equal (==) is used for comparison of values, 
it checks for the value only and ignores the type
*/
console.log(10 == 10); // true
console.log(10 == "10"); // true, because the value is same even though the type is different
console.log(true == 1); // true, because the value is same even though the type is different
console.log(false == 0); // true, because the value is same even though the type is different
console.log(null == undefined); // true, because both null and undefined are considered equal in value

/* Triple Equal (===) is used for comparison of values and types,
it checks for both value and type

(==) is called loose equality operator and (===) is called strict equality operator in JavaScript
*/
console.log(10 === 10); // true
console.log(10 === "10"); // false, because the type is different
console.log(true === 1); // false, because the type is different
console.log(false === 0); // false, because the type is different
console.log(null === undefined); // false, because the type is different    
console.log (5 === 5.0); // true, because both value and type are same (both are numbers)