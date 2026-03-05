// IQ - using the same case inside the switch statements

let x = 10;

switch (x){
    case 10:
        b1 = 1
        console.log(b1);
        break;
    
    case 10:
        b2 = 20;
        console.log(b2);
        break; 
}

// Switch uses strict match

let y = "5"

switch (y){
    case 5:
        console.log("5 is a Number");
        break;
    
    case "5":
        console.log ("5 is a String a match");
        break;
    
    default:
        console.log("Define the specific usecase")
}