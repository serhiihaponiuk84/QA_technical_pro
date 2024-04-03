function isNaNfunction(value) {
    // if (typeof (+value) != 'number') {
    //     return false;
    // }
    // return true;
    return +value !== +value;
}

console.log(isNaNfunction(NaN));            // true
console.log(isNaNfunction("text"));   // true, так как "text" не может быть преобразовано в число
console.log(isNaNfunction(123));      // false, 123 является числом
console.log(isNaNfunction("123"));    // false, строка "123" может быть преобразована в число
console.log(isNaNfunction(undefined));// true, undefined преобразуется в NaN
console.log(isNaNfunction({}));       // true, объект не может быть преобразован в число
console.log(isNaNfunction(true));     // false, логическое true преобразуется в 1, что является числом
