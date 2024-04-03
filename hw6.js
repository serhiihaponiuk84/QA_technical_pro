/* Task - 1
  Напишіть функцію getFirstChar(str), яка повертає рядок str з першим символом у верхньому регістрі,
  наприклад:
  я даю слово "кіт", а мені повертаеться "Кіт"
  *Підказка: використайте slice */

function getFirstChar(str = "") {
    if (typeof str !== "string") {
        str = String(str);
    }
    return  str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(getFirstChar("кіт")); // "Кіт"
console.log(getFirstChar("dog")); // "Dog"
console.log(getFirstChar(""));    // ""

/* Task - 2
  Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘forex’ or ‘crypto’, інакше false
  Функція має бути нечутливою до регістру
  / / / https://www.tiktok.com/@devslopes/video/7154123361671466283 / / / */

function checkSpam(str) {
    if (typeof str !== "string") {
        str = String(str);
    }
    const spam_1 = "forex";
    const spam_2 = "crypto";
    const lowerStr = str.toLowerCase();
    // if (lowerStr.includes(spam_1) || lowerStr.includes(spam_2)) {
    //     return true;
    // }
    return lowerStr.includes(spam_1) || lowerStr.includes(spam_2);
}

console.log(checkSpam("Earn money with Forex")); // true
console.log(checkSpam("Learn about CRYPTO today")); // true
console.log(checkSpam("Get free samples")); // false

/* Task - 3
  У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.
  Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.
  *Підказка: використайте slice */

function extractCurrencyValue(str) {
    if (typeof str !== "string") {
        str = String(str);
    }
    if (str.charAt(0) !== "$") {
        throw new Error("Currency value should start with '$'");
    }
    const numberValue = Number(str.slice(1));
    if (isNaN(numberValue)) {
        throw new Error("Currency value is not a valid number");
    }
    return numberValue;
}

console.log(extractCurrencyValue("$120")); // 120
console.log(extractCurrencyValue("$15.99")); // 15.99
console.log(extractCurrencyValue("$0")); // 0
console.log(extractCurrencyValue("$123")); // 123
console.log(extractCurrencyValue("$45.67")); // 45.67
// console.log(extractCurrencyValue("123")); // Error: Currency value should start with '$'
// console.log(extractCurrencyValue("$abc")); // Error: Currency value is not a valid number

