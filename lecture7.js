// Навіщо return?

function sum() {
    5 + 5;
}
console.log(sum());

function sum() { // cпосіб 1
    return 5 + 5;
}
console.log(sum());

function sum() { // cпосіб 2
    console.log( 5 + 5);
}
sum();

// Чому не працює?

var x = 3, y = 4;

function sum(x, y) {
    return x + y;
}
console.log(sum());

// Рішення
var x = 3, y = 4;

function sum(x, y) {
    return x + y;
}
console.log(sum(x, y));
console.log(sum(8, 9)); // функція потребує аргументів

// Чому не працює?

function sum() {
    for (let i = 0; i < 5; i++) {
        let result += i;
    }
}
sum();

var result; // result потрібно спочатку проініціалізувати а потім робити операції

function sum() {
    for (let i = 0; i < 5; i++) {
        result += i;
    }
}
sum();

// Чому не працює?
var result = 0

function sum() {
    for (let i = 0; i < 5; i++) {
        return result += i;
    }
}
console.log(sum());

var result = 0

function sum() {
    for (let i = 0; i < 5; i++) {
        result += i;
    }
    return result
}
console.log(sum());

//У вашій функції sum() присутній оператор return всередині циклу for, тому після першого виклику циклу функція
// повертає значення та припиняє своє виконання, і жоден інший ітерація циклу не відбудеться.

/* --- Методи чисел (Number): ---

- Перетворіть рядок "123" на число. */

let str = "123"
let str1 = Number.parseInt(str);
console.log (str1, typeof str1)

//- Перевірте, чи є значення NaN.

console.log(Number.isNaN(str))
console.log(Number.isNaN(str1))

// - Округлить число 3.14 до цілого числа

console.log(Math.round(3.14))

// - Знайдіть максимальне значення з двох чисел.

console.log(Math.max(3,14))

// - Перетворення рядка "123.45" на число з 2 десятковими знаками.

var chislo = "123.45"
console.log( Number.parseFloat(chislo));

// - Знаходження квадратного кореня числа 9.

console.log(Math.sqrt(3.14))

// --------------------------------------------------------------------------------------------------------------
// --- Методи рядків (String): ----

// - Перетворіть число 123 на рядок.

var chislo = 123.45
var str123 = String(chislo)
console.log(str123, typeof str123)

// - Перетворення рядка "привіт" у верхній регістр.

console.log("hi".toUpperCase())

// - Знаходження першого входження символу "о" в рядку "привіт".

console.log("hohoho".indexOf("o"))

// - Видалення пробілів з обох кінців рядка " привіт ".

console.log(" привіт ".trim())

// - Створіть функцію, яка замінює всі пробіли в рядку на підкреслення.

console.log(" привіт привіт привіт".replaceAll(" ","_"))
console.log(" привіт привіт привіт".replace(" ","_"))

// - Напишіть код, який виводить індекс останнього входження символу "о" в рядку "Aloha".

console.log("hohoho".lastIndexOf("o"))

// https://www.tiktok.com/@honey_baron/video/7291333654083685637




// LECTURE

/**
 ---- Об'єкт в JavaScript - це складний тип даних, який дозволяє зберігати колекцію значень та функцій,
 що пов'язані між собою.

 Об'єкти дозволяють організовувати дані у вигляді пар ключ-значення,
 де кожен ключ - це рядок (іноді називають "властивість"),
 а значення може бути різного типу даних, включаючи інші об'єкти, масиви, числа, рядки, функції тощо.

 Об'єкти містять властивості та методи.
 Властивості – стан об'єкта, значення будь-якого типу.
 Методи – поведінка об'єкта, функція, яка виконує будь-яку операцію.

 --- Cтворення об'єктів ---

 Спосіб 1

 Цей спосіб ініціалізації об'єкта використовує фігурні дужки {} і вказується список ключ-значення для властивостей об'єкта. */

var user = {
    name: "John",
    sName: "Snow",
    age: 30,
};

/* За допомогою конструктора Object

Хоча цей спосіб створення рядків не дуже поширений, він може бути корисним у випадках,
коли потрібно працювати з методами та властивостями об'єкта рядка.

Наприклад:    */

const strObject = new String("Це рядок в об'єкті");

console.log(strObject, typeof strObject); // Результат: [String: 'Це рядок в об'єкті']
console.log(strObject.length); // Довжина рядка
console.log(strObject.charAt(0)); // Перший символ рядка

// створення порожнього об'єкту
var user1 = new Object();   // використовуючи конструктор Object
var user2 = {};             // використовуючи літерал об'єкта
console.log(user1);
console.log(user2);

/* --- Читання властивостей ---

Ви можете отримати доступ до властивостей об'єкта за допомогю двох основних способів:
доступу через крапку (.) та доступу через квадратні дужки ([]).

--- Доступ через крапку:

Цей метод використовується для отримання значення властивості об'єкта,
якщо ключ (ім'я властивості) є відомим на етапі написання коду.  */

var person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person.firstName); // Отримання значення через крапку
console.log(person.lastName);

/* Доступ через квадратні дужки:

Цей метод дозволяє отримати доступ до властивостей об'єкта, коли ключ містить спеціальні символи, пробіли або генерується динамічно.*/

var person = {
    firstName: "John",
    lastName: "Doe"
};
console.log(person["lastName"]); // Отримання значення через квадратні дужки
console.log(person["firstName"]);

/* --- Додавання властивостей ---

Для додавання нової властивості ви просто встановлюєте її, вказуючи ключ та значення через крапку або квадратні дужки. */
var person = {
    firstName: "John",
    lastName: "Doe"
};

person.pet = "Murzik"; // Додавання властивості через крапку

console.log(person);

// Ви також можете додавати властивості до об'єкта динамічно за допомогою змінних як ключів.

var person = {
    firstName: "John",
    lastName: "Doe"
};

person["favFood"] = "pizza"; // Додавання властивості через квадратні дужки

console.log(person["favFood"]);

// Якщо неіснуючій властивості привласнити значення, то ця властивість буде створена в об'єкті

let user = new Object();           // створення порожнього об'єкту
console.log(user);

user.name = "admin";               // створення властивості name та присвоєння значення admin
user.email = "admin@example.com";  // створення якості email та присвоєння значення admin@examle.com
console.log(user);

// Важливою особливістю JS є можливість отримати доступ до властивості, навіть якщо такої властивості в об'єкта не існує. Наприклад:
console.log(user.myImaginaryProperty); // Тобто доступ до відсутньої властивості є, а ось самого значення властивості — немає. Тому й отримуємо undefined.

// В об'єкті може бути вкладений об'єкт.
let user1 = {
    name: "admin",
    email: "admin@example.com",
    address: { // властивість address, в якому знаходиться об'єкт
        city: "London",
        street: "Uxbridge Rd",
        building: "7",
        name: {
            name: {

            }
        }
    }
};

console.log(user1.name);
console.log(user1.address.city);

/* --- Перезапис властивостей ---

Ми можемо замінити властивість на інше значення */

var user = {
    name: "John",
    sName: "Snow"
};
console.log("Було: " + user.sName);
user.sName = 'Dou'; // Перезапис значення властивості
console.log("Стало: " + user.sName);

/* --- Видалення властивостей ---

 Якщо ми можемо додавати, змінювати нові властивості, то як нам їх видаляти
 Для цього використовується оператор delete  */

var user = {
    name: "John",
    sName: "Snow"
};

console.log("Було:");
console.log(user);

delete user.sName; // Видалення властивості lastName

console.log("Стало:");
console.log(user);

/* Destructuring assignment (розпакування) для об'єктів у JavaScript -
це спосіб витягнути окремі властивості об'єкта та призначити їх змінним.

Це допомагає спростити роботу з об'єктами та зробити код більш читабельним */

const person = {
    firstName: "John",
    lastName: "Doe"
};

const { firstName: first, lastName: last } = person;

console.log(first); // Результат: "John"
console.log(last); // Результат: "Doe"

/* Дуже цікава штука обчислювані імена властивостей (computed property names) - це можливість JavaScript динамічно визначати імена властивостей об'єктів при їхньому створенні.

У вашому прикладі ви використали обчислюване ім'я властивості, коли ви встановили властивість userType як ключ для об'єкту obj. При створенні об'єкту ви використали квадратні дужки ([]), щоб вказати, що значення змінної userType має бути використане як ключ для властивості об'єкту.

Ось як це працює:             */

let userType = 'admin';

let obj = {
    name: 'Test',
    lastName: 'Test',
    credentials: {
        login: "test.test",
        password: 'Test123'
    },
    [userType]: true // Обчислюване ім'я властивості
}

console.log(obj[userType]); // Виведе true

/* У цьому коді userType - це змінна, яка містить рядкове значення 'admin'.
При використанні obj[userType], JavaScript використовує значення змінної userType ('admin') як ім'я властивості для об'єкту obj. Таким чином, властивість з іменем 'admin' стає доступною в об'єкті,
і ви можете отримати до неї доступ, використовуючи квадратні дужки або крапки.

Обчислювані імена властивостей дозволяють створювати більш гнучкі об'єкти, динамічно визначаючи їхні ключі на основі змінних або виразів. */

// Властивістю об'єкта може навіть функція, то така властивість називається методом
var group = {
    name: 'QA pro',
    students: 17,
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo: function () {
        console.log('Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor);
        //  return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor; // Інший спосіб запису, для нас в цілому нічого не зміниться!

    }
}

group.teachersInfo();
//console.log(group.teachersInfo());

/* --------------------------------------------------------------------*/

// practice

var group = {
    name: 'QA pro',
    students: 17,
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo() {
        return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor;
    },
    Name() {

    },
    Name() {

    }
}

console.log(group.getGroupName());
console.log(group.changeGroupName('BUBLIK'));
console.log(group.getGroupName());

// Рішення

var group = {
    name: 'QA pro',
    students: 17,
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo() {
        return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor;
    },
    getName() {
        return group.name;
    },
    setName(name) {
        group.name = name;
    }
}
console.log(group.getName());
group.setName('New group name');
console.log(group.getName());

/* Гетери та сетери - це властивості аксесорів(accessor property).
Вони по суті функції, які виконуються при отриманні та встановленні значення, але виглядають як звичайні властивості в зовнішньому коді.

Властивості аксесорів представлені методами “гетер” та “сетер”.
У об’єкті вони буквально позначаються як get і set
Вони по суті функції, які виконуються при отриманні та встановленні значення,  але виглядають як звичайні властивості в зовнішньому коді.

let obj = {
  get propName() {
    // гетер, код виконано під час отримання obj.propName
  },

  set propName(value) {
    // сетер, код виконано під час встановлення obj.propName = value
  }
};

Гетер працює, коли obj.propName зчитується, сетер – коли він призначається.

https://vm.tiktok.com/ZMMrMJW76

Давайте на прикладі

Тепер ми хочемо додати властивість fullName, яка повинна бути "Тарас Мельник".
Звичайно, ми не хочемо копіювати інформацію, що існує, тому ми можемо реалізувати її як аксесор: */

let user = {
    name: "John",
    surname: "Snow",

    get fullName() {
        return `${user.name} ${user.surname}`;
    }
};

console.log(user.fullName);

/* Ззовні аксесор виглядає як звичайна властивість.
В цьому і є ідея аксесорів властивостей. Ми не викликаємо user.fullname як функцію,
ми читаємо її як звичайну властивість: гетер виконає свою роботу за кулісами. */

let user = {
    get fullName() {
        return `...`;
    }
};

user.fullName = "Test";  // Помилка (властивість має лише гетер)
console.log(user.fullName)

// Виправимо це, додавши сетер для user.fullName:

let user = {
    name: "John",
    surname: "Snow",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// Виконується встановлення повного ім’я із заданим значенням.
user.fullName = "Daenerys Targaryen";

alert(user.name); // Daenerys
alert(user.surname); // Targaryen

// Додамо set
const group = {
    groupName: 'QA pro',
    students: 17,
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    get studentCount() {
        return group.students;
    },
    set studentCount(count) {
        group.students = count;
    }
}
console.log(group.studentCount);
group.studentCount += 44;
console.log(group.studentCount);

/* Тобто ще раз про гетери та сетери!

let obj = {
    get propName() {
        // код, який виконується при отриманні значення obj.propName
    },
    set propName(value) {
        // код, який виконується при встановленні значення obj.propName = value
    }
};

Ось деякі причини, чому гетери і сетери можуть бути корисними:

- Інкапсуляція та контроль доступу: Гетери і сетери дозволяють забезпечити більшу контроль інкапсуляції.
Ви можете приховати реальні дані із зовнішнього світу та використовувати методи доступу для взаємодії з цими даними.
Наприклад, ви можете використовувати сетер для перевірки валідності значення перед збереженням його у властивість об'єкта.

- Додаткова логіка: Гетери і сетери дозволяють виконувати додаткову логіку під час отримання
або встановлення значення властивості. Наприклад, ви можете автоматично оновлювати інші властивості об'єкта
або виконувати певні дії на основі зміни значення.

- Зручний доступ до даних: Гетери і сетери дозволяють забезпечити зручний спосіб доступу до даних,
особливо коли необхідно виконувати додаткові перевірки або операції перед доступом до значення.

- Підтримка сумісності з існуючим кодом: Використання гетерів і сетерів може полегшити міграцію
або рефакторинг коду, оскільки ви можете зберегти зовнішній інтерфейс,
коли реалізація внутрішніх деталей змінюється.

В цілому, гетери і сетери дозволяють створити більш безпечні та гнучкі об'єктні інтерфейси,
які забезпечують контроль доступу до даних та дозволяють виконувати додаткову логіку під час доступу до цих даних.  */

//-------------------------------------------------------------------------------------------------------

//  Що робить цей код?

var user = {
    login: "John",
    sName: "Dow",
    age: 25,
    greet: function (greet1) {
        console.log(greet1 + user.login + ' ' + user.sName);
    }
}
user.greet('hello');

/*… Але такий код ненадійний. Якщо ми вирішимо скопіювати user в іншу змінну,
напр. admin = user перезаписати user чимось іншим, тоді цей код отримає доступ до неправильного об’єкта.

Ключове слово this в JavaScript вказує на поточний об'єкт, у контексті якого виконується код.
this використовується для доступу до властивостей та методів об'єкта, коли ви працюєте з методами об'єкта,
подіями або конструкторами.

Значення this змінюється в залежності від контексту використання функції

Наприклад, якщо ми хочемо привітатися виводячи ім'я нашого user викликаючи метод greet */

var user = {
    name: "John",
    sName: "Dow",
    age: 25,
    greet: function (greet) {
        console.log(greet + ', ' + this.name + ' ' + this.sName + ' ' + this.age); //this.name буде звертатися безпосередньо до полей name, sName, age даного конкретного об'єкта user
    },
    buy: function () {
        console.log("Гарного вечора та смачної вечері!!")
    }
}
user.greet('hello');
user.buy();

//---------------------------------------------------------------------------------------------

//Як дізнатися, чи є в об'єкті необхідна нам властивість?

/* Перевірка наявності якості в об'єкті. Спосіб 1

При спробі прочитати неіснуючу властивість повертається значення undefined */

var user = {
    login: "JohnSnow",
    age: 25,
    unsubscribeDate: undefined
}

if (user.login) // наявність значення еквівалентна true
{
    console.log("Властивість user.login існує");
}
else {
    console.log("Властивість user.login не знайдено");
}

if (user.unsubscribeDate) // наявність значення еквівалентна true
{
    console.log("Властивість user.unsubscribeDate існує");
}
else {
    console.log("Властивість user.unsubscribeDate не знайдено");
}

if (user.unsubscribeDate !== undefined) // властивість відсутня, якщо значення undefined
{
    console.log("Властивість user.unsubscribeDate існує");
}
else {
    console.log("Властивість user.unsubscribeDate не знайдено");
}

/* Перевірка наявності якості в об'єкті. Спосіб 1  */

var user = {
    login: "JohnSnow",
    age: 25,
    unsubscribeDate: undefined
}

console.log("User second name: " + user.sName);
if (user.sName === undefined) {
    console.log('Такого свойства в объекте нет');
}

/* Перевірка значення undefined не підходить в тих ситуаціях,
коли властивість в об'єкті є, але його значення було встановлено як undefined */

var user = {
    login: "JohnSnow",
    age: 25,
    unsubscribeDate: undefined
}

if (user1.unsubscribeDate === undefined) {
    console.log("Властивість user1.unsubscribeDate не знайдено");
}
else {
    console.log("Властивість user1.unsubscribeDate існує");
}

/* Для таких ситуацій використовується ключове слово in

Перевірити наявність властивості в об'єкта можливо двома способами.
Перший за допомогою синтаксису "key_name" in object_name */

var user = {
    login: "JohnSnow",
    age: 25,
    unsubscribeDate: undefined
}

if ("unsubscribeDate" in user) {
    console.log("Властивість user.unsubscribeDate існує");
}
else {
    console.log("Властивість user.unsubscribeDate не знайдено");
}

if ("sName" in user) {
    console.log("Властивість use1.sName існує");
}
else {
    console.log("Властивість user.sName не знайдено");
}

/* Або за допомогою .hasOwnProperty(“key_name”)
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    https://masteringjs.io/tutorials/fundamentals/hasownproperty#:~:text=Both%20also%20support%20ES6%20symbols.&text=So%20what's%20the%20difference%20between,return%20false%20for%20inherited%20properties.
*/

var user = {
    login: "JohnSnow",
    age: 25,
    unsubscribeDate: undefined
}

if (user.hasOwnProperty('login')) {
    console.log("Є така властивість");
} else
    console.log("немає такої властивості");

if (user.hasOwnProperty('login123')) {
    console.log("Є така властивість");
} else
    console.log("немає такої властивості");

// --- Перебір властивостей об'єкту ----
var objectExample = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    7: "another",
    x: 12,
    y: 34,
    z: 45
}

// А як щодо перебору елементів?
for (let i = 0; i in objectExample; i++) {
    console.log(i + ': ' + objectExample[i]);
}

/*Для перебору всіх властивостей об’єкта використовується цикл for..in.
Цей цикл відрізняється від вивченого раніше циклу for(;;) */
var objectExample = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    7: "another",
    x: 12,
    y: 34,
    z: 45,
    blabla: {
        a: 456,
        b: "sdf"
    }
}

for (let i in objectExample) {
    //  console.log(`Властивість ${key} значення ${objectExample[key]}`);
    console.log(`Властивість ` + i + ` значення ` + objectExample[i]);
}

for (let i in objectExample.blabla) {
    //  console.log(`Властивість ${key} значення ${objectExample[key]}`);
    console.log(`Властивість ` + i + ` значення ` + objectExample.blabla[i]);
}

/* --- Методи Object ---

 --- Метод keys - повертає всі ключі (імен властивостей) об'єкта */

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(Object.keys(person));

// --- Метод values - повертає всі значення об'єкта
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(Object.values(person));

// --- Метод entries - повертає пари ключ-значення
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(Object.entries(person));

// --- Метод create - створює новий об'єкт, використовуючи інший об'єкт як прототип для нового об'єкта

const person = {
    firstName: "John",
    lastName: "Doe"
};

const newPerson = Object.create(person);
newPerson.age = 30;

console.log(newPerson.firstName); // Результат: "John"
console.log(newPerson.age); // Результат: 30

/* Потрібно отримати суму усіх значень */

var objectExample = {
    x: 1,
    y: 3,
    z: 4
}

var sum = 0
for (let i in objectExample) {
    sum = sum + objectExample[i];

}
console.log(sum)

let total = 0;
for (let key in objectExample) {
    total += objectExample[key];
}

console.log(total)

/*--------------------------------------------------------------------------------------------------------
Додатково:

developer mozilla
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

w3school
https://www.w3schools.com/js/js_object_methods.asp

Javascript info
https://uk.javascript.info/object
https://uk.javascript.info/constructor-new
https://uk.javascript.info/object-copy
https://uk.javascript.info/object-methods
https://uk.javascript.info/property-accessors

https://vm.tiktok.com/ZMMr6Astg

 Hardcore tasks from codewars.com:

 https://www.codewars.com/kata/57d001b405c186ccb6000304
 https://www.codewars.com/kata/570ef4d6127ad17515000b87
 https://www.codewars.com/kata/577ff15ad648a14b780000e7 */