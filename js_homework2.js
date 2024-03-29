/* Необхідно написати програму яка буде виводити інформацію за умовами при яких число виводитиметься
з правильним словом: "рік", "роки" або "років". Тобто. "29 років" чи "4 роки".

Умови виконання ДЗ
1. Рік отримувати через prompt()
2. Зробити перевірку що користувачь ввів число та це число не є відємним
3. Не використовувати функції або інші матеріали які ми не вивчали
4. Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки.

Будь ласка, надайте наступні дані для перевірки вашої роботи:
1. Створіть гілку js_homework2.
2. Додати туди ваше домашне завдання
3. Вислати вашу гілку */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

const main = async () => {
    const age = await question("Hi, how old are you?");

    let YearWord;

    if (isNaN(age)) YearWord = 'не є роком.'
        else {

            let n = Math.abs(age) % 100;
            let n1 = n % 10;

            if (n > 10 && n < 20) YearWord = 'років';
            else {
                if (n1 > 1 && n1 < 5) YearWord = 'роки';
                else {
                    if (n1 == 1) YearWord = 'рік'; else YearWord = 'років';
                }
            }
        }
        console.log(age + " " + YearWord);

    rl.close();
};

main(); // Виклик асинхронної функції