// ---------------------------------------
// group1

let str = "JavaScript";
let letter = str[1];
console.log(letter);

let text = "Джаваскріпт - це весело";
let length = text.length;
console.log(length);

var result = 0/0;
console.log(nan)

var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false;
guessWho = 9.14;
console.log(guessWho)

const num = 42;
const str1 = "Shuba";
const result = num + str1;
console.log(result)

var result = "40" - 4;
console.log(result);

let n = 7;
n *= 9 + 1;
console.log(n);

var a = 4;
var b = 3;
var c = a = b;
console.log(c)

var number = 65;
number %= 2;
console.log(number);

console.log(17 !== '17');

console.log((+null));

let sex = 'male';
let birthday = 19;
let discount;
if (sex === 'male'){
    discount = (birthday >= 25 ) ? "30%" : "10%";
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
}
console.log(discount)

let firstName = "";
let lastName = "Bulochka";
let nickName = "";
console.log( firstName || lastName || nickName || "Анонім");

console.log( null || (2 && 3) || 4 );

// Яке буде останне значення?
var i = 0;
do {
    i += 3;
    console.log("i = " + i);
} while (i < 8);

/* Завдання 1:
Вирахуйте значення площі кола на основі наданих значень.
Площа кола дорівню добутку квадрату радіуса на число Пі(3.1415)
Виведіть результат
*/

var r = 15; // радіус
var Pi = 3.1415; // число Пі


/* Завдання 2:
Виведіть на екран загальну вартість всіх продуктів, які є на складі
 */

let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5;  // кількість одениць 1го продукту на складі
let productQuantity2 = 9;  // кількість одениць 2го продукту на складі
let productQuantity3 = 15; // кількість одениць 3го продукту на складі


/* Завдання 3:
Змініть switch на if...else.
Поведінка сценарія, після зміни, повинно залишитись без змін (зверніть увагу на змінні USA и Great Britain).
*/

var country = prompt("Введіть назву країни");

if (country == "USA" || country == "Great Britain") {
    alert("Англійська мова");
}
else if (country == "Germany") {
    alert("Німецька мова");
}
else if (country == "France") {
    alert("Французька мова");
}
else {
    alert("Вказаної країни немає в списку");
}

/* Завдання 4:
За допомогою цикла for виведіть всі числа котрі НЕ діляться на 6 між 0 и 100
*/

/* Завдання 5:
Створіть функцію max(a, b), яка повертає більшее число з чисел а и b без використання бібліотеки Math
*/

// --------------------------------------------------
// group2

let str = "DataTypes";
let letter = str[1];
console.log(letter);

let text = "Джаваскріпт - це цікаво";
let length = text.length;
console.log(length);

var result = "qwerty"/0;
console.log(nan)


var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false;
guessWho = 8.97;
console.log(guessWho)

const num = 68;
const str1 = "Borsh";
const result = num + str1;
console.log(result)

var result = "30" - 3;
console.log(result);

let n = 5;
n *= 4 + 9;
console.log(n);


var a = 9;
var b = 7;
var c = a = b;
console.log(c)

var number = 80;
number %= 2;
console.log(number);

console.log(3 !== '03');

console.log((+undefined));


let sex = 'female';
let birthday = 29;
let discount;
if (sex === 'male'){
    discount = (birthday >= 25 ) ? "30%" : "10%";
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
}
console.log(discount)



console.log( 1 && 2 && null && 3 && undefined);


console.log( (null || -1 && 1)  );


// Яке буде останне значення?

var i = 0;
do {
    i += 4;
    console.log("i = " + i);
} while (i < 11);

/* Завдання 1:
Вирахуйте значення площі трапеції на основі наданих значень.
Площа кола дорівню добутку квадрату радіуса на число Пі(3.1415)
Виведіть результат
Формула: https://www.elitclass.com.ua/components/com_jshopping/files/img_products/full_a91.jpg
*/

var a = 6; // перша основа
var b = 9; // друга основа
var h = 4; // висота


/* Завдання 2:
Виведіть на екран cередню ціну на продукти
 */

let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5;  // кількість одениць 1го продукту на складі
let productQuantity2 = 9;  // кількість одениць 2го продукту на складі
let productQuantity3 = 15; // кількість одениць 3го продукту на складі

/* Завдання 3:
Зміни if...else на switch
*/
var value = +prompt("Введіть число 1 або 2");

if (value == 1) {
    alert("Ви ввели число 1");
}
else if (value == 2) {
    alert("Ви ввели число 2");
}
else {
    alert("Вы ввели неправильне значення");
}

/* Завдання 4:
За допомогою цикла for виведіть всі числа котрі діляться на 4 між 0 и 100
*/

/* Завдання 5:
Створіть функцію min(a, b), яка повертає менше число з чисел а и b без використання бібліотеки Math
*/

// -----------------------------------

// 1.

let str = "JavaScript";
let letter = str[1];
console.log(letter);

let text = "Джаваскріпт - це весело";
let length = text.length;
console.log(length);

var result = 0/0;
console.log(nan)

var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false;
guessWho = 9.14;
console.log(guessWho)

const num = 42;
const str1 = "Shuba";
const result = num + str1;
console.log(result)

// 2.

let str = "DataTypes";
let letter = str[1];
console.log(letter);

let text = "Джаваскріпт - це цікаво";
let length = text.length;
console.log(length);

var result = "qwerty"/0;
console.log(nan)


var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false;
guessWho = 8.97;
console.log(guessWho)

const num = 68;
const str1 = "Borsh";
const result = num + str1;
console.log(result)

// 3.

let str = "String";
let letter = str[1];
console.log(letter);


let text = "0";
let length = text.length;
console.log(length);


var result = "js"/0;
console.log(nan)


var guessWho = 10.27;
guessWho = 'Here is sentence';
guessWho = true;
guessWho = 8.28;
console.log(guessWho)


const num = 20;
const str1 = "Plov";
const result = num + str1;
console.log(result)

// 4.

let str = "Arrays";
let letter = str[1];
console.log(letter);


let text = "";
let length = text.length;
console.log(length);


var result = "string"/0;
console.log(nan)


var guessWho = 2.84;
guessWho = 'А тепер тут рядок';
guessWho = false;
guessWho = 2.32;
console.log(guessWho)


const num = 24;
const str1 = "Golubci";
const result = num + str1;
console.log(result)