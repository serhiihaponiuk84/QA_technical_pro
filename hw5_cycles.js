/* Task - 1
   Replace the "for" loop with a "while" loop */

for (let i = 0; i < 8; i++) {
    console.log( `число - ` + i);
}

console.log();

let i = 0;
while (i < 8) console.log( `число - ` + i++);

console.log();

/*Task - 2
  Implement algorithm which will calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop */

let firstNumber = -100;
let secondNumber = 250;

let step = 1;
let sum = 0;

for (let i = firstNumber; i <= secondNumber; i += step) sum += i;
console.log("Sum of numbers from " + firstNumber + " to " + secondNumber + " (included) is " + sum + ".");

console.log();

/* Task - 3
  Make a timer that will count from 10 to 0
  For example,
  10 seconds left
  9 seconds left
  8 seconds left */

for (let i = 10; i >= 0; i--) {
    let start_time = Date.now();
    let current_time = null;

    console.log(`${i} seconds left`);
    do {
        current_time = Date.now();
    } while (current_time - start_time < 1000); // "Задержка" на 1 секунду
}

console.log();

/* Task - 4
  Create program to display the following sequence: 7 14 21 28 35 42 49 */

let sequenceBase = 7;
let sequence = "";

for (let i = 1; i <= sequenceBase; i ++) sequence += (sequenceBase * i) + " ";
console.log(sequence);

console.log();

// v.2
let start = 7;
let end = 49;
step = 7;
sequence = "";

for (let i = start; i <= end; i += step) sequence += i + " ";
console.log(sequence);

console.log();


/* Task - 5
  implement algorithm which calculates factorial for
  using for, while, do..while operators
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html */
let factorial = 1;
let base = 10;

for (let i = base; i > 0; i--) factorial *= i;
console.log("Factorial for " + base + " is " + factorial + ".");

console.log();

/* Task - 6
  implement algorithm filling a bathtub using buckets.
  we know how many liters the bathtub holds and the capacity of one bucket,
  but we don't know how many buckets we need.
  We need to fill the bathtub without overflowing it.
  Use while loop */

let bucket = 5; //capacity of one bucket
let initialBathState = 0; //the initial value of the amount of water in the bathroom
let bathCapacity = 60; //

let count = 0;

while ((initialBathState + bucket) <= bathCapacity) {
    initialBathState += bucket;
    count++;
}
console.log("We need " + count + " buckets to fill a bathtub without overflowing it.");