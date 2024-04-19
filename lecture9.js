/*
• Що таке об'єкт? Як створити об'єкт?
• Що таке властивість та метод, у чому різниця?
• Як додати властивість до об'єкта після його створення?
• Як перевірити, чи існує властивість в об'єкті? */

var name = "Ihor";

function getRandomInt(min, max) {
    if (min > max) {
        throw new Error("min must be less than or equal to max");
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInt(1, 15);
console.log(`${name}, твій випадковий номер: ${randomNumber}`);

// https://docs.google.com/presentation/d/1QDKJEIM9XxUz9OGWtZhoQ9HUXaigpLN19ptYSrOrv7s/edit?usp=sharing
// https://www.tiktok.com/@scrumlaunch/video/7328432388579593478




// LECTURE

/**
 --- Масиви ---

 У JavaScript масив (Array) є структурою даних, яка дозволяє зберігати колекцію елементів в одній змінній.
 Масиви в JavaScript можуть містити елементи будь-якого типу даних, такі як числа, рядки, об'єкти, функції та інше.
 Кожен елемент у масиві має унікальний індекс, що дозволяє доступатися до нього та взаємодіяти з ним.

 Тобто,
 * масив – впорядкована колекція значень. JavaScript масив може містити елементи будь-якого типу. Масив – це особливий вид об'єктів.
 * Елемент масиву – окреме значення, що знаходиться у масиві.
 * Індекс – числова позиція елемента масиву. Індексація масиву починається з 0

 --- Ініціалізація масивів ---

 Літеральний спосіб: Ви можете створити масив, вказуючи його елементи у квадратних дужках.   */

// Cтворення порожнього масива
let emptyArray = [];            // створення масиву з використанням літералу (частіше використовується цей варіант)
let emptyArrayConstructor = new Array();   // створення масиву з використанням конструктора

const fruits = ["яблуко", "груша", "апельсин"]; // створення масиву та заповнення масиву рядковими значеннями
const numbers = new Array(1, 2, 3, 4, 5); // використання конструктора Array

var arr = [10, "John", true]; // Масив у JS дуже невибагливий, туди можна наштовхати чого завгодно

// під час використання consol.log будуть відображатися всі елементи масиву
console.log(fruits);
console.log(arr);
console.log(typeof arr); // object - масив, особливий вид об'єктів

/* Отримання доступу до елементів масиву відбувається за допомогою наступного синтаксису:

масив[індекс] = значення; - зміна значення елемента масиву за індексом
змінна = масив[індекс]; - читання значення елемента масиву за індексом */

let cities = []; // створення порожнього масиву
cities[0] = "London"; // присвоєння значення за індексом 0
cities[1] = "Paris"; // присвоєння значення за індексом 1
cities[2] = "Berlin"; // присвоєння значення за індексом 2
cities[3] = "Rome"; // присвоєння значення за індексом 3

let cityName = cities[0];
console.log("First array element - " + cityName);

// Додавання значень в існуючий запис
var arr = ['Oleg', 'Olga', 'Mykola'];
arr[3] = 'Koly';
console.log(arr)

// Перезапис значень
var arr = ['Oleg', 'Olga', 'Mikola'];
arr[0] = 'Solomiya';
console.log(arr)

// Додавання значень за допомогою push
const emptyArray1 = [];
console.log(emptyArray1)
emptyArray1.push("елемент 1");
emptyArray1.push("елемент 2");
console.log(emptyArray1)

/* Тож яка різниця із об'єктом?

const fruits = ["яблуко", "груша", "апельсин"];

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const persons = [
 {
 name: "John",
 },
   {
 name: "Mary",
 },
   {
 name: "Harry",
 },
]

- Масиви зазвичай використовуються для зберігання списків елементів одного типу (наприклад, чисел, рядків).
- Об'єкти використовуються для зберігання асоціативних даних, де кожен ключ має своє значення.

- У масивах доступ до даних відбувається за допомогою індексів, які є числами.
- У об'єктах доступ до даних відбувається за допомогою ключів, які можуть бути рядками.
*/

// А що буде якщо записати у неіснуючий індекс???   https://www.tiktok.com/@scrumlaunch/video/7303225465404230917

const numbers1 = [1, 2, 3, 4, 5];

console.log(numbers1[7]); // Якщо спробувати прочитати значення індексу для якого немає елемента масиву, буде отримано значення undefined.
console.log(numbers1.length);
numbers1[7] = 10; // 6 елемент (індекс 2) стає 10. При записі значення за неіснуючим індексом в масив буде додано нове значення за цим
                  // індексом. Водночас значення властивості length буде перераховано.
console.log(numbers1[7]);
console.log(numbers1.length);
console.log(numbers1);

/*

Важливо пам'ятати, що індекси масивів починаються з нуля.
Тобто перший елемент має індекс 0, другий - індекс 1 і так далі.
Якщо ви намагаєтесь прочитати або записати значення за індексом, який виходить за межі розміру масиву, то це може призвести до помилки. Також, важливо перевіряти діапазон індексів перед читанням або записом даних у масив.

*/

// Властивість length

let cities = ["London", "Paris", "Berlin", "Rome"];
console.log(cities.length); // length - властивість масиву, в якому знаходиться кількість елементів масиву

cities[4] = "Lisbon"; // при зміні елемента масиву, що знаходиться за межами поточної довжини масиву, відбувається автоматичне оновлення властивості length
console.log(cities.length); // довжина масиву збільшилась на 1

cities[10] = "Madrid";
console.log(cities.length); // тепер довжина масиву 11, оскільки індекс останнього елемента масиву 10
console.log(cities);

cities.length = 2; // встановивши length менше розміру масиву, ми видалили елементи, що виходять за межі нового розміру масиву
console.log(cities);

cities.length = 5;
console.log(cities);

/*
   Оператор delete видалить елемент масиву, але залишить його індекс з властивістю undefined.

   Важливо враховувати, що видалені елементи залишаються в масиві як undefined, і вони можуть впливати на подальшу роботу з масивом. Тому ретельно вивчайте потреби та вимоги вашого коду, перш ніж використовувати оператор delete для масивів.
*/

var arr = ['Oleg', 'Olga', 'Mykola'];
delete arr[0];
console.log(arr)
console.log(arr[0])

// Як зрозуміти, що перед вами масив?
var arr = ["один", "два", "три"];
console.log(typeof arr);

var notArr = {
    0: "Один",
    1: "Другой",
    2: "Третий",
    length: 3
}
console.log(typeof notArr);

/*

Метод Array.isArray() - використовується для перевірки, чи об'єкт є масивом.
Він повертає true, якщо об'єкт є масивом, і false у протилежному випадку.

*/

var arr = ["один", "два", "три"];
var notArr = {
    0: "Один",
    1: "Другой",
    2: "Третий",
    length: 3
}
console.log(Array.isArray(arr));
console.log(Array.isArray(notArr));

// Виведення елементів масиву за допомогою циклу

let cities = ["London", "Paris", "Berlin", "Rome"];

// запускаємо цикл із лічильником від 0 до 4 (довжини масиву)
for (let index = 0; index < cities.length; index++) {
    const element = cities[index]; // звертаємось до елементу масиву за індексом (значенням лічильника циклу)
    console.log(element);
}

// for...of

let cities = ["London", "Paris", "Berlin", "Rome"];

// прохід за значеннями масиву cities
// на кожній ітерації в змінну city записуватиметься наступні значення з масиву cities
// Всередині циклу city використовується як тимчасова змінна, яка містить посилання на поточне ім'я міста, яке ітерується з масиву cities. На кожному циклі ітерації з масиву cities до city присвоюється нове ім'я міста, а потім його значення виводиться на консоль.
for (const city of cities) {
    console.log(city);
}

// Пошук максимального значення масиву

var values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];




var max = values[0] ;

for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (element > max) {
        max = element;
    }
}


/* ----- Методи масивів ------

Метод – функція, визначена в об'єкті.
Функція – блок коду, який виконує певну дію, цей  блок коду можна використовувати неодноразово.
У багатьох об'єктів, таких як масиви, є
багато вбудованих методів, які спрощують роботу розробника. Використання методів  має наступний загальний принцип:

змінна.ім'я_методу(список_параметрів);

Для отримання доступу до методів об'єкта необхідно скористатися оператором ”.”, після  якого вказати ім'я методу.
Після імені методу обов'язково потрібно вказати круглі дужки,  у яких, залежно від методу, використовуватимуться різні значення.

*/

// Перетворення масиву на рядок
var arr = [1, 2, 3, 4, 5];
console.log('toString() : ' + arr.toString()); // метод, який перетворює масив в рядок. Він повертає рядок, який містить розділені комами значення масиву
console.log('join без параметрів : ' + arr.join());	// якщо в метод join() не передати роздільник, то елементи масиву будуть об'єднані за допомогою коми
console.log('join з параметром : ' + arr.join('----'));// можна вказати роздільник

// Дія зворотна join - split
var str = "Був рядок із пробілами. Став масив слів";
var arr = str.split(' '); //Вказуємо символ, яким будемо " розбивати "
console.log(arr);

var str = "value1, value2, value3";
var values = str.split(', '); // створення масиву на основі рядка, використовуючи як роздільник ', '
console.log(values);

// concat - об'єднує два масиви
var a = [1, 2];
var b = [3, 4];
var res = a.concat(b);
console.log(res);

// У метод concat можна передати багато параметрів, і навіть не обов'язково - масивів
var a = [1, 2];
var b = [3, 4];
var res = a.concat("five", true, b); // Вихідні масиви не змінилися, поверне НОВИЙ масив
console.log(res);

// Начебто як "складення" масивів
var a = [1, 2];
var b = [3, 4];
var str = a + b; // Спробує об'єднати (з'єднати) масиви a і b за допомогою оператора +. Однак в JavaScript оператор + між масивами виконує примус типу, перетворюючи їх на рядки перед об'єднанням.
console.log(str);
console.log(typeof str);

// indexOf - шукає елемент із зазначеним значенням у масиві та повертає його індекс, або -1, якщо елемент не знайдений
var arr = ['Oleg', 'Olga', 'Mikola', 'Vadim', 'Vadim'];
console.log(arr.indexOf('Olga'));
console.log(arr.indexOf('Vadim'));
console.log(arr.indexOf("Vadim", 4)); // шукає індекс значення Vadim, починаючи з 4 індексу масиву
console.log(arr.indexOf("Julia")); // -1 значення не знайдено
console.log(arr.lastIndexOf('Vadim')); // lastIndexOf - пошук праворуч наліво

// slice(start, end) - повертає новий масив, який копіює елементи з start до end (не включаючи end)
var arr = [1, 3, 7, 5, 8, 9];
// var newArray = arr.slice(3);// З третього – і до кінця
// var newArray = arr.slice(2, 5); // з другого по п'ятий
//var newArray = arr.slice(3, 1);//порожній масив
// var newArray = arr.slice(-4, -1);//відраховує з кінця
//var newArray = arr.slice(); // Поверне весь масив. Тобто фактично клонує його!
console.log('arr = ' + arr); // Початковий масив залишився незмінним
console.log('x = ' + newArray);

// Задом наперед - все навпаки!
var arr = [1, 3, 7, 5, 8, 9];
arr.reverse(); //Змінює сам масив!
console.log(arr)

/*  includes()  використовується для визначення того, чи містить масив певне значення.
Він повертає true, якщо значення знайдено у масиві, та false, якщо воно відсутнє */
var arr = [1, 3, 7, 5, 8, 9];
console.log(arr.includes(7));
console.log(arr.includes(2));

// Епічна тема: сортування масиву
var arr = [16, 2, 7, 9, 34, 3];
console.log("before sort: " + arr);
console.log("after default sort: " + arr.sort());

/*
За замовчуванням sort() сортує елементи у лексикографічному порядку, що означає,
що рядки сортуються за їхніми кодами Unicode, а числа сортуються як рядки.
Проте, ви можете використовувати власну функцію порівняння для визначення кастомного порядку сортування.
*/

function myCompare(a, b) {
    return a - b
}

// -2 - (-4) = -2 +4 = 2
// -4 - (-2) = -4 +2 = -2

/* Якщо a більше b, функція повертає додатне число.
Якщо a менше b, функція повертає від'ємне число.
Якщо a дорівнює b, функція повертає 0. */

console.log(myCompare(-4, -2));
console.log(myCompare(5, 3)); // 2
console.log(myCompare(2, 4)); // -2
console.log(myCompare(10, 10)); // 0


// До чого тут масиви?

function myCompare(a, b) {
    return a - b // якщо результат буде позитивне то порядок буде змінено
}

var arr = [16, 2, 7, 9, 34, 3];
arr.sort(myCompare);
console.log("after my sort: " + arr);

// за спаданням
var numbers1 = [4, 2, 1, 3];
numbers1.sort((a, b) => b - a); // Returns [4, 3, 2, 1]

// Як воно буде працювати зі строками ?
const fruits2 = ['banana', 'apple', 'date', 'cherry'];
fruits2.sort();
console.log(fruits2);

// приклад з масивом обєктів
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Doe', age: 20 }
];
users.sort((a, b) => a.age - b.age);
console.log(users);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// ----- Маніпуляції з масивом -----

// push та pop - додають елементи в кінець масиву або видаляють останній елемент
// pop() - метод масиву, який видаляє останній елемент масиву та повертає його
var cities = ["London", "Paris", "Berlin", "Rome"];
console.log('Початковий arr = ' + cities);
let last = cities.pop();
console.log("pop result " + last);
console.log('Після змін arr = ' + cities);

// push - метод, який додає вказане значення в кінець масиву
var cities = ["London", "Paris", "Berlin", "Rome"];
console.log('Початковий arr = ' + cities);
cities.push("> Lisbon <");
console.log('Після змін arr = ' + cities);

// unshift та shift - додають елементи на початок масиву або видаляють перший елемент
// зсув масиву - вліво, "втрачаючи" перший елемент
var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
var v = arr.shift(); //"втрачений" елемент
console.log('v = ' + v + '\narr = ' + arr);

// зсув масиву - праворуч, додаючи елементи
var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
var v = arr.unshift(1, 2); // повертає довжину масиву
console.log('v = ' + v + '\narr = ' + arr);

// fill -  дозволяє заповнювати весь або частину масиву статичним значенням
var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Новий arr = ' + arr.fill('blablabla'));

var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Змінений arr = ' + arr.fill('blablabla', 1)); // заповнює з 2ої позиції

var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Змінений arr = ' + arr.fill('blablabla', 1, 3)); // заповнює з 2ої до 4ої позиції

/*  Метод splice, !!!не плутати з slice!!!

    splice - використовується для зміни вмісту масиву, включаючи вставку, видалення та заміну елементів.
*/

var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);
var newArr = arr.splice(1, 2);
console.log('newArr = ' + newArr + '\narr = ' + arr);

// Вставиляє шматочок у середину
var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);
var res = arr.splice(2, 0, 'a', 'b'); //другий параметр дорівнює 0, що означає, що жоден елемент не буде видалено, але нові елементи 'a' та 'b' будуть вставлені починаючи з позиції 2 у масиві arr
console.log('res = ' + res + '\narr = ' + arr);

// Можна і вирізати та вставити
var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);
var res = arr.splice(1, 2, 'a', 'b');
console.log('res = ' + res + '\narr = ' + arr);

/* А що робити якщо хочемо провести якусь операцію для кожного члена масиву?

 Ітераційні методи масивів в JavaScript - це методи, які дозволяють легко перебирати елементи масиву та виконувати певні дії над кожним з них.
Ці методи роблять роботу з масивами більш зручною та допомагають уникнути ручного написання циклів.

*/

// forEach - виконує задану функцію для кожного елемента масиву
var arr = [2, 4, 6, 8];

arr.forEach(function (v) {
    console.log(v * 10)
});

console.log(arr);

// Можна зустріти такий вигляд
var arr = [2, 4, 6, 8];
arr[7] = 111;
arr.forEach((v) => {
    console.log(v * 10)
});
console.log(arr);

// map - створює новий масив, не трансформуючи вихідний, застосовуючи функцію до кожного елемента
var arr = [2, 4, 6, 8];
var res = arr.map(function (v) {
    return v * 10;
});
console.log(arr);
console.log(res);

// --- Фільтрація масиву ---
// filter - створює новий масив, включаючи елементи, які задовольняють умову

// Приклад 1
var arr = [2, 8, 4, 12, 34, 3, 51];

var res = arr.filter(checker);

console.log("arr = " + arr);
console.log("res = " + res);

function checker(item) {
    return item > 8;
}

// Приклад 2
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter((number) => number % 2 === 0);
console.log("res = " + evenNumbers); // evenNumbers: [2, 4]

// Перевірка масиву every/ some
// every - перевіряє, чи задовольняють всі елементи масиву певну умову
// Метод every() повертає true, якщо всі елементи масиву задовольняють умову, вказану у функції checker
// const ages1 = [45, 30, 35, 40, 45];
const ages1 = [5, 30, 35, 40, 45];
const isAdults = ages1.every((age) => age >= 18);
console.log("res = " + isAdults);

// some - перевіряє, чи хоча б один елемент масиву задовольняє певну умову
// Метод some() повертає true, якщо хоча б один елемент масиву задовольняє умову, вказану у функції checker, та false, якщо жоден елемент не задовольняє цю умову.
// const ages = [16, 20, 25, 30, 35];
const ages = [76, 20, 25, 30, 35];
const hasAdult = ages.some((age) => age >= 68);
console.log("res = " + hasAdult);

/*

reduce дозволяє застосовувати функцію до кожного елемента масиву та накопичувати результат в єдине значення.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/


var arr = [2, 4, 3, 1, 5];
var res = arr.reduce(myAction);
//var res = arr.reduce(myAction, 12); // "стартове" значення
//var res = arr.reduce(myAction, 0);
//var res = arr.reduceRight(myAction, 0);

console.log('+++++++++++++\nresult: ' + res);

// Сума масиву
function myAction(accumulator, currentValue, index, array) {
    console.log('-----\n' + 'now in accumulator: ' + accumulator);
    console.log('arr[' + index + '] = ' + currentValue);
    return accumulator + currentValue;
}

// Ще приклад сума масиву тільки для непарних чисел
var arr = [1, 2, 3, 4, 5];
var res = arr.reduce(myAction);
function myAction(accumulator, currentValue, index, array) {
    console.log('-----\n' + 'now in accumulator: ' + accumulator);
    console.log('arr[' + index + ']=' + currentValue);
    accumulator = (currentValue % 2 !== 0) ? accumulator + currentValue : accumulator;
    return accumulator;
}
console.log(res);


// find  -  знаходить перший елемент масиву, який задовольняє певну умову.
var arr = [1, 2, true, 4, 5, 'test'];
console.log(arr.find((el) => {
    return el === 5;
}))

// більш лаконічна форма
const fruits4 = ["яблуко", "груша", "апельсин", "банан"];
const firstCitrusFruit = fruits4.find((fruit) => fruit === "апельсин"); // firstCitrusFruit: "апельсин"

// можна достукатись і до об'єктів
var arr = [
    { name: "John Snow", age: 45 },
    { name: "Cersei Lannister", age: 32 },
    { name: "Daenerys Targaryen", age: 18 },
    { name: "Jorah Mormont", age: 28 }
];

console.log(arr.find((el) => {
    return el.age === 18;
}))

// findIndex - знаходить індекс першого елемента, який задовольняє умову
const colors = ["червоний", "зелений", "синій", "жовтий"];
const indexOfBlue = colors.findIndex((color) => color === "синій"); // indexOfBlue: 2
console.log(indexOfBlue);

// https://www.tiktok.com/@scrumlaunch/video/7181129737169882374

/* Трохи практики

Поговоримо що таке факторіал

0! = 1
1! = 1
2! = 1 * 2 = 2
3! = 1 * 2 * 3 = 6
4! = 1 * 2 * 3 * 4 = 24   */

// Спосіб 1 за допомогою for
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const number = 5;
console.log(`Факторіал ${number} дорівнює ${factorial(number)}`);


// Спосіб 2 за допомогою рекурсії
//  Рекурсія – це метод програмування, який дає змогу функції багаторазово викликати себе доти, доки не буде виконано умову завершення
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

/*
Пояснення:

Коли фунція доходить до return n * factorial(n - 1) то починає працювати ТІЛЬКИ factorial(n - 1)
n = 5, factorial(n - 1) - це в нас factorial(4), далі йде по такому принципу:
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1 * factorial(0)
factorial(0) = 1

*/

// Приклад рекурсії з додаванням суми цифр числа
function sumOfDigits(number) {
    if (number <= 0) { // Базовий випадок: якщо число менше або дорівнює 0, повертаємо 0
        return 0;
    }
    // Рекурсивний випадок: додаємо останню цифру числа до суми, а потім викликаємо функцію для числа без останньої цифри
    else {
        return number % 10 + sumOfDigits(Math.floor(number / 10));
    }
}

console.log(sumOfDigits(12345)); // Виведе 15 (1 + 2 + 3 + 4 + 5)

/*
Пояснення:

Починаємо з number = 12345.
У першому виклику функції: 12345 % 10 дає 5 (остання цифра) і рекурсивний виклик для Math.floor(12345 / 10), що дорівнює 1234.
У другому виклику функції: 1234 % 10 дає 4 і рекурсивний виклик для Math.floor(1234 / 10), що дорівнює 123.
У третьому виклику функції: 123 % 10 дає 3 і рекурсивний виклик для Math.floor(123 / 10), що дорівнює 12.
Цей процес продовжується, поки number не стане меншим або дорівнюватиме 0.
Коли number стає меншим або дорівнює 0, рекурсія зупиняється і починається повернення суми всіх цифр.
Отже, сума цифр числа 12345 дорівнює 1 + 2 + 3 + 4 + 5 = 15. */

// Потрібно згадати наступне:
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31)); // Expected output: "the lazy dog."

console.log(str.slice(4, 19)); // Expected output: "quick brown fox"


// Знайти слово палідром за допомогою рекурсії
function isPalindrome(word) {
    if (word.length <= 1) { // Базовий випадок: якщо довжина слова менше або дорівнює 1, то воно є паліндромом
        return true;
    }
    // Рекурсивний випадок: порівнюємо перший і останній символи слова
    else {
        // Якщо перший і останній символи однакові, викликаємо функцію для середини слова
        if (word[0] === word[word.length - 1]) {
            return isPalindrome(word.slice(1, -1));
        } else {
            return false; // Якщо перший і останній символи відрізняються, слово не є паліндромом
        }
    }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("radar")); // Виведе true
console.log(isPalindrome("hello")); // Виведе false
console.log(isPalindrome("level")); // Виведе true

/*
Розглянемо приклад для isPalindrome("racecar"):

Починаємо зі слова "racecar".
Порівнюємо перший та останній символи: "r" === "r".
Оскільки вони співпадають, викликаємо isPalindrome з аргументом "aceca" (без першої та останньої букви).
У новому виклику порівнюємо перший та останній символи "a" === "a".
Опять же, вони співпадають, тому викликаємо isPalindrome з аргументом "cec" (без першої та останньої букви).
Порівнюємо "c" === "c", і вони співпадають, тому викликаємо isPalindrome з аргументом "e" (без першої та останньої букви).
Тепер у новому виклику isPalindrome маємо одну букву, що задовольняє умову базового випадку, тому повертаємо true.
Отже, "racecar" - це паліндром, і функція повертає true. */

/*--------------------------------------------------------------------------------------------------------
Додатково:

https://www.tiktok.com/@scrumlaunch/video/7179964592162999558

w3schools

https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_array_search.asp
https://www.w3schools.com/js/js_array_sort.asp
https://www.w3schools.com/js/js_array_iteration.asp

developer mozilla

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Hardcore tasks from codewars.com:

https://www.codewars.com/kata/57cc975ed542d3148f00015b
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
https://www.codewars.com/kata/56576f82ab83ee8268000059
https://www.codewars.com/kata/563e320cee5dddcf77000158
https://www.codewars.com/kata/5a092d9e46d843b9db000064
https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
https://www.codewars.com/kata/5b6c220fa0a661fbf200005d
https://www.codewars.com/kata/55eeddff3f64c954c2000059
https://www.codewars.com/kata/558fc85d8fd1938afb000014
*/