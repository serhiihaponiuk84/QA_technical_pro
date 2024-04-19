/*
• Що таке масив та як його створити у JavaScript?
• Що таке елемент масиву та індекс?
• Що станеться, якщо в масив на 5 елементів записати значення за індексом 10?
• Що станеться, якщо з масиву на 5 елементів прочитати значення індексу 10?
• Як можна вивести на екран усі значення масиву, коли розмір масиву заздалегідь невідомий?
• Що таке цикл for … of?
• Як можна видалити певне значення з масиву?
• Як додати нове значення в кінець масиву?
• Як додати нове значення на початок масиву?
• Як можна об'єднати два масиви?
• Як можна дізнатися, за яким індексом у масиві розташоване потрібне нам значення?
• Як розбити рядок на масив значень, використовуючи як роздільник певний символ? */

// Що буде виведене у консоль?

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list)

/*
1 ["1 + 2", "1 * 2", "1 / 2"]
2 ["12", 2, 0.5]
3 [3, 2, 0.5]
4 [1, 1, 1]  */

// Що буде виведене у консоль?

const arr = [1, 2, 3];
arra.reverse();
console.log(arr)

// Що буде виведене у консоль?

const arr1 = [1, 2, 3];
arr1.reverse();
console.log(arr)

// Що буде виведене у консоль?

const array = [ 3, 4];

array.unshift(2);
array.unshift(0, 1);
array.unshift([-1]);

console.log(array)

// Що буде виведене у консоль?

const words = [ 'a', 'b', 'c'];
const result = words.concat(1, [2, [3]]);

console.log(result)

// Що буде виведене у консоль?

const x = [ 1, 2, 3];
x[-1] = -1;

console.log(x.length)

// Що буде виведене у консоль?

const y = [ 1, 5, 10, 15];

console.log(y.fill(0, 2, 4))






// LECTURE

/* --- Регулярні вирази ---

    Регулярний вираз (RegExp) - це шаблон, який використовується для пошуку та заміни тексту в рядках.
    Він складається з послідовності символів, які визначають певний шаблон, який потрібно знайти в тексті.

    Регулярні вирази використовуються в багатьох програмах, таких як пошукові системи,
    текстові редактори, утиліти обробки тексту, лексичний аналіз та інші.

    Регулярні вирази підтримуються в багатьох мовах програмування, таких як JavaScript, Python, PHP, Java та інші.

    Вони використовуються для пошуку та заміни тексту в рядках, а також для валідації даних та інших завдань обробки тексту.
*/

var str = "миші, щури, знову миші, хом'яки, ховрахи";
var pattern = /щури/; // це RegExp. Слеші /.../ говорять JavaScript про те, що це регулярний вираз. Вони відіграють тут ту саму роль, що й лапки для позначення рядків.
console.log("Тип регулярного виразу: " + typeof pattern);
console.log("Знаходимо на якому індексі? " + str.search(pattern)); // Шукаємо шаблон у рядку
console.log("А якщо не знайшли ? " + str.search(/кіт/));
console.log("Чи знайшли ми цей паттерн, шаблон у наданому реченні? " + pattern.test(str)); // метод test() використовуеться для перевірки, чи зустрічається цей підрядок у рядку str. Якщо метод test() повертає true, це означає, що підрядок "щури" знайдено у рядку str.

// Однак поки що не сталося нічого, чого не міг би зробити indexOf()
// значок | - внутрішній оператор мови регулярних виразів, що позначає "або"
var str1 = "vasja@yahoo.com";
var str2 = "petja@gmail.com";
var pattern = /@gmail|@urknet/
console.log(str1 + ': ' + str1.search(pattern)); // Не знайшли
console.log(str2 + ': ' + str2.search(pattern)); // Знайшли

console.log("Тестуємо перший рядок: " + pattern.test(str1)); // І у зворотний бік
console.log("Тестуємо другий рядок: " + pattern.test(str2));  // Якось менш інформативно – тільки так чи ні.

// Перелік альтернативних варіантів можна укласти в дужки
var str1 = "vasja@yahoo.com";
var str2 = "petja@gmail. com"; // Зверніть увагу: тут помилка!
var str3 = "petja@gmail9com";
var str4 = "petja@gmail.com";
var pattern = /(@gmail|@urknet).com/; // З точкою тут не все так просто
console.log(str1 + ': ' + pattern.test(str1));
console.log(str2 + ': ' + pattern.test(str2));
console.log(str3 + ': ' + pattern.test(str3));
console.log(str4 + ': ' + pattern.test(str4));

/* --- Метасимволи ---

Метасимволи слугують будівельними блоками regexp.
Вони не є незалежними і зазвичай інтерпретуються будь-яким чином.
Деякі метасимволи мають особливе значення, а тому поміщаються в квадратні дужки.

Метасимволи:

.	  - Будь-який одиничний символ, за винятком нового рядка.
[ ]   - Пошук набору символів, поміщених у дужки.
[^ ]  - Негативний клас символів. Збігається з будь-яким символом, який не міститься між квадратними дужками
* - 0 - або більше повторень попереднього символу.
+ - 1 - або більше повторень попереднього символу.
?	  - Робить попередній символ опціональним.
{n,m} - Повертає як мінімум "n", але не більше "m" повторень попереднього символу.
(xyz) - Знаходить групу символу в строго заданому порядку.
|     - Розділяє допустимі варіанти.
\     - Виключає наступний символ. Дозволяє шукати службові символи [ ] ( ) { } . * + ? ^ $ \ |
^     - Знаходить початок введеного рядка.
$     - Знаходить кінець введеного рядка.

*/

/*  Точка
. - це найпростіший приклад метасимволу. Метасимвол . відповідає будь-якому одиничному символу.

    Припустимо, ми хочемо знайти буквально точку. Не "будь-який символ", а саме крапку!
*/

// Але не все так просто!
var names = "file.txt log.txt file.png 1txt.doc one_txt.jpg";
var pattern = /.txt/g;
var matches = names.match(pattern); //match  використовується для знаходження відповідностей між регулярним виразом і рядком і повертає масив знайдених збігів
console.log(matches)

// Чи ще
var sentence = "The car parked in the garage.";
var pattern = /.ar/g;
var matches = sentence.match(pattern);
console.log(matches)

// Бо крапка заміняє будь-який символ!
var names = "Аня Ася Оля Аля Валя";
var pattern = /А.я/g;
var matches = names.match(pattern);
console.log(matches)

// Як думаете, чому не повернулася Валя?

/*
    Щоб використовувати спеціальний символ як звичайний, додайте до нього зворотну косу риску: \.
    Це називається "екранування символу".
*/
var names = "file.txt log.txt file.png 1txt.doc one_txt.jpg";
var pattern = /\.txt/g;
var matches = names.match(pattern);
console.log(matches)

// Ще приклад
var str = "ivanov_ruslan@yahoo.com";
var pattern = /.com/;
console.log(str + " - " + pattern.test(str)); // Очікувано повертає true

str = "ivanov_commer@gmail"; // Змінимо адресу
var pattern = /.com/;
console.log(str + " - " + pattern.test(str));

// !!! Ще раз, крапка значить будь-який символ !!!

var str1 = "vasja@yahoo.ua";
var str3 = "petja@gmail.com";
var str2 = "petja@gmailcom";
var pattern = /\.com/;
console.log(str1 + ': ' + pattern.test(str1));
console.log(str3 + ': ' + pattern.test(str3));
console.log(str2 + ': ' + pattern.test(str2));

// пошук '/'
var str1 = "Строка з /";
var pattern = /\//;
console.log(str1 + ': ' + pattern.test(str1));

// пошук '\'
var str1 = "Строка з \\";
var pattern = /\\/;
console.log(str1 + ': ' + pattern.test(str1));

// Давайте подивимось на такий приклад :)
var str = "У цьому вся тексті зустрічається символ \" | \". Як знайти його через регулярний вираз?";
console.log(str);
var pattern = /\||\./; //Звичайно ж - екранувати, Таким чином, цей регулярний вираз відповідатиме будь-якому символу | або . в рядку.
//цей регулярний вираз відповідає будь-якому рядку, який містить символ | або .. Наприклад, він відповідатиме рядкам "apple|orange" та "hello.world".
console.log("Тестуємо: " + pattern.test(str));

var pattern = /\||\./;
var str1 = "apple|orange";
console.log("Тестуємо: " + pattern.test(str1));

var str2 = "hello.world";
console.log("Тестуємо: " + pattern.test(str2));

/* Інтервал символів

Інтервал або набір символів також називають символьним класом.
Для його позначення використовуються квадратні дужки.
Щоб вказати діапазон символів усередині класу, необхідно поставити знак тире.
Порядок ряду символів у наборі неважливий.

*/

var sentence = "The car parked in the garage.";
var pattern = /[Tt]he/g;  // The or the
var matches = sentence.match(pattern);
console.log(matches)

// Варто зазначити, що крапка, поміщена у квадратні дужки, означає саме крапку, а ніщо інше. Таким чином регулярний вираз ar[.] означає малий символ a, за яким йде буква r, за якою йде крапка.
var sentence = "A garage is a good place to park a car.";
var pattern = /ar[.]/g;
var matches = sentence.match(pattern);
console.log(matches)

// А якщо нам потрібно знайти Аллу чи Анну?
var names = "Анна Алла аівпавпа Аркан А@#$а Абба";
var pattern = /А..а/g;
var matches = names.match(pattern);
console.log(matches)

// Нам тоді потрібно використовувати пошук за різними значень
var names = "Анна Алла аівпавпа Аркан А@#$а Абба Анла Ална";
var pattern = /А[нл][нл]а/g;  // говорить що 'н' та 'л' - допустимі значення
var matches = names.match(pattern);
console.log(matches)

// Ще приклад
var str = "vasja@gmail.com";
var pattern = /[bcdi]/; // Регулярний вираз /[bcdi]/ вказує на пошук будь-якого символу, який відповідає будь-якому з символів "b", "c", "d" або "i".
console.log("Чи є тут співпадіння? " + pattern.test(str)); // Поверне правду, якщо у рядку є хоча б один символ із зазначеного набору. У цьому випадку, метод test() повернув true, оскільки в рядку str знайдено символ "i", який відповідає одному з символів у наборі [bcdi].
console.log("На якій позиції? " + str.search(pattern));

/* --- Класи символів ---

Класи символів у регулярних виразах дозволяють вам визначати групи символів, які ви шукаєте у тексті.
Вони представлені в квадратних дужках [...] і дозволяють вам вказати,
які символи приймаються як відповідні символи у тексті.

Ось декілька прикладів класів символів:


    /[a-z]/ - діапазон значень від a до z. Тобто - всі малі англійські літери
    /[A-Z]/ - діапазон значень від a до z. Тобто - всі великі англійські літери
    /[0-9]/ - всі цифри
    /[a-zA-Z0-9]/ - загалом усі літери латинського алфавіту, а разом із ними ще й цифри

    Скорочення
    / \d / - Те саме, що і [0-9]
    / \w / - те ж, що [a-zA-Z0-9_] всі літери англійського алфавіту, цифри та знак підкреслення
    / \s / - різні "пробільні" символи

    За винятком класу [^...] -  відповідає будь-яким символам, крім тих, які вказані у квадратних дужках.

*/

// Клас [a-z]
var text = "apple Banana cherry";
var pattern = /[a-z]+/g;
var matches = text.match(pattern);
console.log(matches); // ["apple", "сherry"]

// Клас [A-Z]
const text = "apple Banana cherry";
const pattern = /[A-Z]+/g;
const matches = text.match(pattern);
console.log(matches); // ["B"]

// Клас [0-9]
const text = "12345 apples, 6789 bananas";
const pattern = /[0-9]+/g;
const matches = text.match(pattern);
console.log(matches); // ["12345", "6789"]

// Клас [a-zA-Z0-9]
const text = "Hello123 World_456";
const pattern = /[a-zA-Z0-9]+/g;
const matches = text.match(pattern);
console.log(matches); // ["Hello123", "World", "456"]

// Ще приклад
var names = "Аня Ася Оля Аля Валя Александрия";
var pattern = /А[а-я]я/g;
var matches = names.match(pattern);
console.log(matches)

// Спокійно можемо комбінувати обидва підходи – і це вже цікаво
var str = "Сьогодні 6 день тижня";
var pattern = /[1-7asd] день тижня/;
console.log("Чи є співпадіння? " + pattern.test(str));
console.log("На якій позиції? " + str.search(pattern));

// Діапазон "крім"
// Приклад 0
const text = "The car parked in the garage";
const pattern = /[^c]ar/g;  // ^_^
const matches = text.match(pattern);
console.log(matches);

// Приклад 1
const text = "apple banana cherry";
const pattern = /[^aeiou]+/g;
const matches = text.match(pattern);
console.log(matches); // ["ppl", " bnn", " chrry"]

// Приклад 2
var str = "Дуже довгий рядок, в якому немає англійських букв і цифр";
var pattern = /[^\w]/; // Чи є щось, крім англійського алфавіту та цифр?
console.log(pattern.test(str));
console.log(str.search(pattern));  // І справді, перший (нульовий) символ не підходить під шаблон.

var str = "Loremipsum";
var pattern = /[^\w]/; // Чи є щось, крім англійського алфавіту та цифр?
console.log(pattern.test(str));
console.log(str.search(pattern));

var str = "98";
var pattern = /[^\w]/; // Чи є щось, крім англійського алфавіту та цифр?
console.log(pattern.test(str));
console.log(str.search(pattern));

// Приклад 3
var str = "Дуже довгий рядок, в якому немає англійських букв і цифр";
var pattern = /[^а-я]/; // Чи є в нас великі літери
console.log("Друга спроба: " + pattern.test(str));
console.log(str.search(pattern)); // І справді, перша літера - велика!

var str = "дуже";
var pattern = /[^а-я]/; // Чи є в нас великі літери
console.log("Друга спроба: " + pattern.test(str));
console.log(str.search(pattern)); // І справді, перша літера - велика!

// Приклад 4
var names = "file.txt log.txt file_1.txt 1.txt 1loj.txt";
var pattern = /[^0-9]\.txt/g;
var matches = names.match(pattern);
console.log(matches)

// Давайте спробуємо знайти дату - 01.01.1999
// dd.mm.yyyy
var names = "01.01.1999 05.08.2015 03.02.2000 07.09.1976 08.08.8888 99.99.2000";
var pattern = /[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]/g;
var matches = names.match(pattern);
console.log(matches)

// Давайте трохи додамо валідацію
// dd.mm.yyyy
var names = "01.01.1999 05.08.2015 03.02.2000 07.09.1976 08.08.8888 99.99.2000";
var pattern = /[0-3][0-9]\.[0-1][0-9]\.[12][09][0-9][0-9]/g;
var matches = names.match(pattern);
console.log(matches)



// Але не все....

var names = "01.01.1999 05.08.2015 03.02.2000 07.09.1976 08.08.8888 99.99.2000 33.01.2000 01.19.1999 05.06.2999";
var pattern = /[0-3][0-9]\.[0-1][0-9]\.[12][09][0-9][0-9]/g;
var matches = names.match(pattern);
console.log(matches)

// Давайте розберемо дні. Вони бувають від 1 до 31






// Чи підійде [1-31] ?

// Які бувають дати?






// 0 - друга може бути від 1 до 9 - 0[1-9]
// 1,2 - друга може бути від 0 до 9 - [12][0-9]
// 3 - друга тільки 0 та 1 - 3[01]




//0[1-9]|[12][0-9]|3[01]

var names = "01 02 11 12 13 21 22 23 25 30 31 32 41 42 50";
var pattern = /0[1-9]|[12][0-9]|3[01]/g;
var matches = names.match(pattern);
console.log(matches)

/*

\d - всі цифри
\D - все, крім цифр

\W - Крім букв, цифр і _
\S - крім пробілових символів

*/


/* --- Квантифікатори та кількісні обмеження ---

Квантифікатори та кількісні обмеження в регулярних виразах дозволяють вам визначити, скільки разів даний елемент чи група елементів повинні відповідати паттерну.

Вони роблять регулярні вирази більш гнучкими та потужними. Ось декілька типових квантифікаторів:

- Квантифікатор `*`: Відповідає нуль або більше входжень попереднього елементу.
- Квантифікатор +: Відповідає одному або більше входженню попереднього елементу.
- Квантифікатор ?: Відповідає нулю або одному входженню попереднього елементу (робить його необов'язковим).
- Квантифікатор {n}: Відповідає точно n входженням попереднього елементу.
- Квантифікатор {n, m}: Відповідає від n до m входжень попереднього елементу.
- Квантифікатор {n,}: Відповідає принаймні n входженням попереднього елементу.
- Квантифікатор {n}?: Мінімальний квантифікатор, співставлюється найменшій можливій кількості входжень.

Тобто,
? - 0 чи 1 повторення
* - 0 чи більше повторення
+ - 1 чи більше повторення

*/

//* - 0 чи більше повторення
// Приклад 1
var names = "Осіпов Осіпова Осіпову Осіповаааа";
var pattern = /Осіпов.*/g;  //  Це квантифікатор, який означає "будь-який символ (крім символу нового рядка) нуль або більше разів". Таким чином, .* збігається з будь-якою кількістю будь-яких символів після слова "Осіпов"
var matches = names.match(pattern);
console.log(matches)

// Приклад 2
var re = /ab*c/; // Або немає, або є скільки завгодно
console.log(re.test("abc"));
console.log(re.test("abbbbbbbbbbbbbbbbbbbbc"));
console.log(re.test("ac"));

// Приклад 3
var names = "log.txt log1.txt log2.txt log3.txt log33.txt ";
var pattern = /log\d*\.txt/g; // Це квантифікатор, який означає "будь-яка цифра (0-9) нуль або більше разів". Таким чином, \d* збігається з будь-якою кількістю цифр після слова "log"
var matches = names.match(pattern);
console.log(matches)

// Також, ми можемо вказати кількість повторень
console.log(/abc/.test("abbc")); // false
console.log(/ab{2,4}c/.test("abc")); // Вказує на пошук підрядка, який починається з "a", за яким слідує від 2 до 4 символів "b", а потім "c", занадто мало b
console.log(/ab{2,4}c/.test("abbbbbc")); // Занадто багато b
console.log(/ab{2,4}c/.test("abbbc")); // true - в самий раз
console.log(/ab{2,}c/.test("abbbbbbbbbbbbc")); // Два і більше
console.log(/ab{2,}c/.test("abc"));
console.log(/ab{2}c/.test("abc")); // Строго два
console.log(/ab{2}c/.test("abbc")); // Строго два
console.log(/ab{2}c/.test("abbbc")); // Строго два

let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
var regex = /[0-9]{2,3}/g // [0-9]{2,3} означає, що допустима кількість цифр має бути щонайменше дві цифри, але не більше ніж 3 (символи в діапазоні від 0 до 9)
console.log(regex.test(str1));
console.log(str1.match(regex));

let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
var regex = /[0-9]{2,}/g // [0-9]{2,} означає 2 або більше цифр
console.log(regex.test(str1));
console.log(str1.match(regex));

let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
var regex = /[0-9]{3}/g // [0-9]{3} знаходитиме лише 3 цифри, ні менше і ні більше
console.log(regex.test(str1));
console.log(str1.match(regex));

// ? - 0 чи 1 повторення
console.log(/ab?c/.test("abc")); // Вираз вказує на пошук підрядка, що починається з "a", за яким може слідувати нуль або один символ "b", а потім "c".
console.log(/ab?c/.test("ac"));
console.log(/ab?c/.test("abbc"));

// Ще приклад з ?
let str1 = "The car is parked in the garage.";
var regex = /[T]he/g
console.log(regex.test(str1));
console.log(str1.match(regex));

let str1 = "The car is parked in the garage.";
var regex = /[T]?he/g
console.log(regex.test(str1));
console.log(str1.match(regex));

// + - 1 чи більше повторення
var pattern = /ab+c/; // Пошук що починається з "a", за яким може слідувати один або або більше символів "b", а потім "c".
console.log(pattern.test("abc"));
console.log(pattern.test("abbbbbbbbbbbbbbbbbbbbc"));
console.log(pattern.test("ac"));

// Ще приклад з +
let str1 = "The fat cat sat on the mat.";
var regex = /c.+t/ // Рядок, який містить символ "c", за яким слідує будь-яка послідовність символів (включаючи пробіли, оскільки відповідає будь-якому символу) і закінчується на "t"
console.log(regex.test(str1));
console.log(str1.match(regex));

// --- Якоря ----

// Початок рядка '^'
let str1 = "Mary had a little lamb";
var regex = /^Mary/;
console.log(str1.match(regex));

let str1 = "Belle had a little lamb";
var regex = /^Mary/;
console.log(str1.match(regex));

let str1 = "The car is parked in the garage.";
var regex = /^(T|t)he/;
console.log(str1.match(regex));

// Кінець рядка '$'
let str1 = "it's fleece was white as snow";
var regex = /snow$/;
console.log(str1.match(regex));

let str1 = "Today was rain";
var regex = /snow$/;
console.log(str1.match(regex));

let str1 = "The fat cat. sat. on the mat.";
var regex = /(at\.)$/;
console.log(str1.match(regex));

// Більш складний приклад
let goodInput = "12:34";
let badInput = "12:345";
let badInput1 = "012:34";

var regexp = /^\d\d:\d\d$/;
console.log( regexp.test(goodInput) );
console.log( regexp.test(badInput) );
console.log( regexp.test(badInput1) );


/* --- Прапори регулярних виразів ---

    Регулярні вирази можуть мати прапори, які впливають на пошук або надають додаткову інформацію.

    У JavaScript їх усього сім:

    i - З цим прапором пошук не залежить від регістру: немає різниці між A і a (див. приклад нижче).
    g - Із цим прапором пошук шукає всі збіги, без нього - тільки перший.
    m - Багаторядковий режим (розглядається в розділі Багаторядковий режим якорів ^ $, прапор "m").
    s - Вмикає режим "dotall", за якого крапка . може відповідати символу переведення рядка \n (розглядається в розділі Символьні класи).
    u - Вмикає повну підтримку Юнікоду. Прапор дозволяє коректне опрацювання сурогатних пар (докладніше про це в розділі Юнікод: прапор "u" і клас \p{...}).
    y - Режим пошуку на конкретній позиції в тексті (описано в розділі Пошук на заданій позиції, прапор "y").
    d - З цим прапором результат регулярного виразу поміщається в масив, який містить додаткову інформацію про регулярний вираз, наприклад індекси початку і кінця підрядків. Цей прапор не змінює поведінку регулярного виразу, а лише надає додаткову інформацію.
*/

// Найпростіший випадок - реєстронезалежний пошук.
var str = "Ох вже ця вічна ВОзНЯ з регістром"
var regex = /возня/;

console.log("Знайшли щось? " + regex.test(str));
console.log("А що саме? " + str.match(regex));

// А якщо так?
var str = "Ох вже ця вічна ВОзНЯ з регістром"
var regex = /возня/i;

console.log("Знайшли щось? " + regex.test(str));
console.log("А що саме? " + str.match(regex));

// Ще приклад
var str = "The fat cat sat on the mat."
var regex = /The/ig;
console.log("А що саме? " + str.match(regex));

// Наша задача - замінити мишей на ховрахів
// Знайдеться все. Наш перший приклад:
var str = "миші, щури, знову миші, хом'яки, ховрахи";
var regex = /миші/;
var res = str.replace(regex, "ховрахи"); // Заміна тексту, використовуючи регулярний вираз
console.log("Було: " + str + "\nСтало: " + res); // Заміна тільки перших мишей

// Давайте спробуемо з прапором - g
var str = "миші, щури, знову миші, хом'яки, ховрахи";
var regex = /миші/g; // Пошук всіх збігів у тексті
var res = str.replace(regex, "ховрахи");
console.log("Було: " + str + "\nСтало: " + res); // Заміна тільки перших мишей

// Ще приклад
var str = "The fat cat sat on the mat."
var regex = /.(at)/;
console.log(str.match(regex));

var str = "The fat cat sat on the mat."
var regex = /.(at)/g;
console.log(str.match(regex));

// Ще один прапор - m (multiline)
let str = `1е місце: Іванко
2е місце: Михайло
3е місце: Ганна`;

console.log(str.match(/^\d/g)); // Без прапора m було б знайдено тільки перше число!

// Виправляємо!
let str = `1е місце: Іванко
2е місце: Михайло
3е місце: Ганна`;

console.log(str.match(/^\d/gm)); // Зверніть увагу, що прапори можна поєднувати!


// Наступна задача - замінити перші літери на *
var str = "abc\ndef\nghi";
var regex = /^[a-z]/g; // Символ "^" вказує на початок рядка."[a-z]" вказує на будь-яку маленьку літеру англійського алфавіту.Модифікатор "g" вказує на глобальний пошук, тобто пошук всіх входжень, а не тільки першого.
var res = str.replace(regex, "*");
console.log(res); // Як не крути, а "початок рядка" у нас тільки один

// Виправляємо!
var str = "abc\ndef\nghi";
regex = /^[a-z]/gm    // /gm вказує на багаторядковий режим, тобто пошук буде виконуватися для кожного рядка окремо.
res = str.replace(regex, "*");
console.log(res);

// Приклад з кінцем речення
let str = `Іванко: 1
Михайло: 2
Ганна: 3`;

console.log(str.match(/\d$/gm));

// Посилання у регулярних виразах

var regex = /['"][^'"]*['"]/; // Шукаємо щось, укладене в лапки (подвійні чи одинарні);
// var str = "abc\"def\"ghijk";
// var str = "abc\'def\'ghijk";
// var str = "abc\"def\'ghijk";
console.log(str);
console.log(regex.test(str));
console.log(str.match(regex));

/*
    Частину шаблону можна укласти в дужки (...). Це називається "дужкова група".

    У такого виділення є два ефекти:
    - Дозволяє помістити частину збігу в окремий масив.
    - Якщо встановити квантифікатор після дужок, то він застосовуватиметься до всього вмісту дужки, а не до одного символу.
*/

var str = "Publication Date: 2021-09-06" // Якщо ми хочемо отримати окремі компоненти дат - рік, місяць, день? У цьому випадку ми можемо скористатися групами
var regex =  /(\d{4})-(\d{2})-(\d{2})/
var res = str.match(regex);
console.log(res);

// До групи можна звернутися в шаблоні, використовуючи \N, де N - це номер групи.
let str = `He said: "She's the one!".`;
var regexp = /['"](.*?)['"]/g; // (.*?) - це неіменована захоплююча група, яка збігається з будь-яким текстом, включаючи пустий рядок. .*? означає будь-який символ (включаючи символ нового рядка), що повторюється нуль або більше разів, але з якомога меншою кількістю повторень (ліниве зіставлення)
console.log(str.match(regexp)); // Результат - не тот, который хотелось бы - "She'

// Для того, щоб шаблон шукав закриваючу лапку таку саму, як і відкриваючу, обгорнемо відкриваючі лапки в дужкову групу і використаємо зворотне посилання на неї: (['''])(.*?)\1.
let str = `He said: "She's the one!".`;
var regexp = /(['"])(.*?)\1/g;
console.log(str.match(regexp));

// --- Складніші посилання - зовнішні ---
// Згаданий вище replase працює не тільки (і не стільки) з рядками, а й з регулярними виразами
var str = "12aaa54dfhj5546b4mn56bmi456mn456";
console.log("Зразок: " + str);

var regexp = /\d+[a-z]+/; // Пошук послідовностей, які містять одну або більше цифра, за якою слідує одна або більше букв латинського алфавіту
var res = str.replace(regexp, '-+++-');
console.log("Після редагування: " + res);

// А тепер ми хочемо не просто замінити знайдену групу, а поміняти місцями цифри та літери
var str = "12aaa54dfhj5546b4mn56bmi456mn456";
console.log("Зразок: " + str);
//aaaa-12 dfhj-54
var regexp = /(\d+)([a-z]+)/g;
var res = str.replace(regexp, "|$2-$1|"); // Змінює те що знайшли в регексі на |$2-$1|. |$2-$1| -(\d+) - $1, ([a-z]+) - $2. тобто ця функція додає тире, штрихи та змінює  порядки
console.log("Після заміни: " + res);

// Ще кілька слів про дужні групи
var str = "Великий і жахливий Вася Пупкін вийшов на ґанок";
console.log("Зразок: " + str);

var regexp = /(Вася) (Пупкін)/;

// var res = str.replace(regexp, "$2 $1");

// var res = str.replace(regexp, "$1 $`"); // ` - Частина рядка до збігу
// var res = str.replace(regexp, "$1 _$'_"); // Частина рядка після збігу
// var res = str.replace(regexp, "$1 _$&_"); //Збіг цілком

console.log(res);

// Якщо скобочна група потрібна нам тільки для угруповання елементів і ми не хочемо "запам'ятовувати" її, спочатку потрібно поставити умовний знак "?:"
var str = "Великий і жахливий Петя Пяточкін вийшов на ґанок";
var regexp = /(?:Вася|Петя) (?:Пупкін|Пяточкін)/; // У цьому випадку регулярний вираз шукає входження "Вася Пупкін", "Вася П'яточкін", "Петя Пупкін" або "Петя П'яточкін" у вхідному рядку.
var res = str.match(regexp);
console.log(res);

// До речі, split теж вміє працювати з регулярними виразами
var str = "миші щури: знову миші, вуші, Суші. ховрахи";
var regexp = /[:,.]/i;
console.log(str.search(regexp))
var res = str.split(regexp);
console.log(res);