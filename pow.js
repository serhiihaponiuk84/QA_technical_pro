let base =2;
let degree = 3;

function pow(base = 0, degree = 0) {
    if (typeof base != 'number') {
        base = Number(base);
    }
    if (typeof degree != 'number') {
        degree = Number(degree);
    }
    if (isNaN(base) || isNaN(degree)) {
        return NaN;
    }
    if (degree === 0) {
        return 1;
    }
    if (degree < 0) {
        return 1 / pow(base, -degree);
    }

    let exponentiation = 1;
    for (let i = 1; i <= degree; i++)
        exponentiation *= base;
    return exponentiation;
}

let result = pow(base, degree);
if (isNaN(result)) {
    console.log("Помилка вхідних даних!")
} else {
    console.log("Число " + base + " у ступені " + degree + " дорівнює " + result);
}