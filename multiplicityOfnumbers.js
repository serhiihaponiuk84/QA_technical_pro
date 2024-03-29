const divisor = 3;
let min_number = 1;
let max_number = 100;

function addNonMultipleNumbers(min_number= 1, max_number = 100, divisor = 2) {
    let temp_number;
    let sum = 0;
    if (isNaN(min_number) || isNaN(max_number) || isNaN(divisor)) {
        console.log("Программа обробляє лише числа.");
        return NaN;
    };
    if (divisor == 0) {
        console.log("Не можна ділити на 0!");
        return NaN;
    };
    if (min_number > max_number) {
        console.log("Діапазон не може починатися з " + min_number + " та закінчуватися " + max_number + ".");
        temp_number = min_number;
        min_number = max_number;
        max_number = temp_number;
        console.log("Граничні значення діапазоні змінені місцями.");
    }
    for (let i= min_number; i <= max_number; i++) {
        if (i % divisor) sum += i;
    }
    return sum;
}

let result = addNonMultipleNumbers(max_number, min_number, divisor);
if !(isNaN(result))
    console.log("Cума чисел від " + min_number +" до " + max_number + " включно, які не кратні " + divisor + " дорівнює " + result);