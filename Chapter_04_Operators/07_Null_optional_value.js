/* Suppose if we declare the value as null when writing the code ->
Then there are chances where we can face the null pointer exception ->
To Overcome this we will be defining a default value on the right side
if the left side value defined is null

Example : val = null ?? "defined"

-> here for the variable "val" we have defined the value as "null", To overcome the null pointer 
exception we will be defining any value say "defined"

These are very useful in data handling and also used in Modern JS
*/

// Statement -> Bring Amul milk, If Amul milk is not there then bring Nandini milk

let amul = null;
let val = amul ?? "Nandini Milk";

val_1 = "Which Milk -> " + val;
console.log(val_1);

let bike = null;
let santosh_wants = bike ?? "Scooter";

santosh_needs = "Santosh needs -> " + santosh_wants;
console.log(santosh_needs);