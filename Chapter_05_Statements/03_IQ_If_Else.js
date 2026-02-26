// We can write if stattements in a single line

if ("hello") console.log("String is truthy");
if (18) console.log("Numbers are truthy");
if ([]) console.log("Print empty arrays");
if ({}) console.log("Print Object");

//false statements which will not be printed
if (undefined) console.log("Print Undefined"); // Flase : Will not be printed
if (0) console.log("Print Zero") // Will not be printed
if ("") console.log ("Print null"); // False: Null values wont be printed
if (null) console.log ("Print null defined"); //False: Null values wont be printed
if (NaN) console.log("Print NaN values"); // False: NaN values wont be printed
