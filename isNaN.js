function isNaNfunction(value) {
    // if (typeof (+value) != 'number') {
    //     return false;
    // }
    // return true;
    return +value !== +value;
}

console.log(isNaNfunction(NaN));
console.log(isNaNfunction("test"));
console.log(isNaNfunction(123));
console.log(isNaNfunction("456"));
console.log(isNaNfunction(undefined));
console.log(isNaNfunction({}));
console.log(isNaNfunction(true));
