// Write a Program that prints numbers from 1 to 100
// However, for multples of 3, print "Fizz" instead of the number
// For the multiple of 5, print "Buzz" for the Numbers
// that are multiples of both 3 and 5, Print "FizzBuzz"

for (let number=1; number<=100; number++){

    if (number%3 === 0 && number%5 === 0){
        console.log("Fizz Buzz");
    }
    else if (number%3 === 0){
        console.log("Fizz");
    }
    else if (number%5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(number);
    }
}