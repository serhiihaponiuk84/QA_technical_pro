/* Task 1
    Write a function min(a, b) that returns the lesser of two numbers a and b.

    For example,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1 */

let min = (a, b) => {
    if (typeof a != 'number'){
        a = Number(a);
    }
    if (typeof b != 'number'){
        b = Number(b);
    }
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

/* Task 2
   Create a variable which will return a function
    which will take parameter as a number (where 1 stands for pizza, 2 is spagetti and 0 is ramen)
    and returns text ee.g. "My lunch for today is pizza"
    Use function expression with arrow function notation
    @ @ @ https://www.tiktok.com/@devslopes/video/7332200215258238251 @ @ @ */

let chooseLunch = (lunch) => {
    if (typeof luncha != 'number'){
        lunch = Number(lunch);
    }
    if (isNaN(lunch)) {
        return NaN;
    }
    switch (lunch) {
        case 1: return "pizza";
        case 2: return "spagetti";
        case 0: return "ramen";
        default: return NaN;
    }
}

result = chooseLunch(1);
if (result) {
    console.log("My lunch for today is " + result + ".");
} else {
    console.log("Input error!")
}

/* Task 3
    Callback
    Create a function (e.g. function1)  which will take another function (e.g. function2) as an argument
    and returns result of execution of that another function in string format
    Example,
    if function2 returns "THIS IS THE RESULT OF CALLBACK FUNCTION"
    than function1 should return "The result = THIS IS THE RESULT OF CALLBACK FUNCTION" */

// К сожалению, у меня не хватает практического опыта и знаний, чтобы написать что-то свое полезное
// а не просто содрать из интернета

/* Task 4
    Create a function task13Func which returns word google with given numbers of "o" symbols
    Example,
    funcName(7) // => gooooooogle */

function task13Func(count) {
    if (typeof count != 'number'){
        count = Number(count);
    }
    if (isNaN(count) || count < 2) {
        return NaN;
    } // Invalid input

    return 'g' + 'o'.repeat(count) + 'gle';
}

console.log(task13Func(3));
console.log(task13Func(-2));
console.log(task13Func(5));
console.log(task13Func(""));
console.log(task13Func(" "));