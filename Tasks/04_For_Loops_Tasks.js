//Task 1: Print Hello 5 times

for (i=0 ; i<5 ; i++){
    console.log("Hello");
}

//Task 2: Print number from 1 to 10

for (i=1 ; i<=10; i++){
    console.log(i);
}

//Task 3: Print even number from 1 - 20

for (i=1 ; i<=20 ; i++ ){
    if (i%2 == 0){
        console.log(i);
    }
}

//Task 4: Print the sum of first 10 natural numbers

let add;
for (i=1 ; i<=10; i++){

    add = (i + ++i);
    console.log(add)
}

//Print Multiplication table of 5:

// First Method
let mul;
for (j=5 ; j<=5 ; j++){
    for (k=1 ; k<=10; k++){
        mul = (j*k)
        console.log(mul)
    }
    
}
// Second method:
let product;
let j=5;
for (k=1 ; k<=10 ; k++){
    // console.log(j*k)
    product = (j*k);
    console.log(`${j} * ${k} = `, product);
}