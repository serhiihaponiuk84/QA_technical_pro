// --- Operators ----

/* Task - 1
Create variable named myAge and set its value equal your agw
Display the sum of myAge + 30, using two variables: x and y. */

let myAge = 39;
console.log(myAge+30);
let x = myAge;
let y = 30;
console.log(x+y);

/* Task - 2
Create variable named dividedNumber and set its value equal myAge divided by 2
 * NOTE: you should use myAge variable here */

let dividedNumber = myAge / 2;
console.log(dividedNumber);

/* Task - 3
Create variable named multipleNumber and set its value equal myAge multiply by 2 */

let multipleNumber = myAge * 2;
console.log(multipleNumber);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'if' conditional ---

/* Task - 4
 Створіть програму, яка буде зберігати значення ваги кота.
Якщо кіт важить менше 5 кг, то він маленький і його ще треба годувати,
якщо більше 5, то кіт дуже пухнастий і його потрібно розчесати :)

Переписати інструкцію if з використанням умовного оператора '?
*/

let weightOfcat = 5
if (weightOfcat < 5) {
    console.log('кіт маленький і його ще треба годувати')
} else {
    console.log('кіт дуже пухнастий і його потрібно розчесати :)')
}

/* Task - 5
Напишіть умову if, яка перевіряє, чи значення віку НЕ знаходиться між 18 і 50 включно, якщо це не так,
то наймайте.
Переписати інструкцію if з використанням умовного оператора '?

%%% https://www.tiktok.com/@devslopes/video/7260261089928105258 %%%%
*/

if ((18 <= myAge)  && (myAge <= 50)) {
    console.log('you get hired :)');
};

let result = ((18 <= myAge)  && (myAge <= 50))  ? "you get hired :)" : "";
console.log(result);
console.log(((18 <= myAge)  && (myAge <= 50))  ? "you get hired :)" : "");


/* Task - 6
Переписати інструкцію if з використанням умовного оператора '?

if (height < 140) {
 console.log("Заборонено на атракціон");
} else {
   console.log("Проходьте, будь ласка!");
}
*/

height = 140;
result = (height < 140)  ? "Заборонено на атракціон" : "Проходьте, будь ласка!";
console.log(result);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'switch' conditinal ---

/* Task - 8
Напишіть програму, яка буде показувати, до якої пори року належить певний номер місяця
(наприклад, я вводжу "1" і вона повідомляє мені, що зараз зима, вводжу "5" - весна і т.д.). */

monthOfyear = 12;
switch (monthOfyear) {
        case 1, 2, 12:
            console.log("Зима");
            break;
        case 3, 4, 5:
            console.log("Весна");
            break;
        case 6, 7, 8:
            console.log("Літо");
            break;
        case 9, 10, 11:
            console.log("Осінь");
            break;
        default:
            console.log("Немає такого місяця на рік.");
    }
/* Task - 9
Перепишіть "if" на "switch"

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}


if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/

age = 16;

switch (true) {
    case (age < 16):
        console.log("We cant hire u!");
        break;
    case (age == 16 || age == 17):
        console.log("U can take part time job");
        break;
    case (age >= 18):
        console.log("U can take full time job");
        break;
    default:
        console.log("Invalid age");
}

//-----------------------------------------------------------------------------------------------------------

/* Task - 7
Створіть сценарій. Запросіть у користувача вік. Якщо вік користувача більше ніж 18
– виведіть на екран повідомлення «доступ дозволено». Якщо введене користувачем значення
менше ніж 18 – виведіть на екран повідомлення «доступ заборонено»
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question_1 = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

const HowOldAreYou = async () => {
    const myAge = await question_1('Скільки тобі років? ');

    if (myAge >= 18) {
        console.log("Доступ дозволено");
    } else {
        console.log("Доступ заборонено");
    };

    rl.close();
};

HowOldAreYou(); // Виклик асинхронної функції
