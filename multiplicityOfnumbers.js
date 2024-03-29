const divisor = 3;
let min_number = 1;
let max_number = 100;

function multiplicityOfnumbers(min_number= 1, max_number = 100, divisor = 2) {
    let temp_number;
    let sum = 0;
    if (isNaN(min_number) || isNaN(max_number) || isNaN(divisor)) return NaN;
    if (divisor == 0) return NaN;
    if (min_number > max_number) {
        temp_number = min_number;
        min_number = max_number;
        max_number = temp_number;
    }
    for (let i= min_number; i <= max_number; i++) {
        if (i % divisor) sum += i;
    }
    return sum;
}

let result = multiplicityOfnumbers(max_number, min_number, divisor);
if (isNaN(result)) {
    console.log("Помилка вхідних даних!")
} else {
    console.log("Cума чисел від " + min_number +" до " + max_number + " включно, які не кратні " + divisor + " дорівнює " + result);
}