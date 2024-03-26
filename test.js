// Підключення модуля readline
const readline = require('readline');

// Створення інтерфейсу readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Задання питання користувачеві
rl.question('Як тебе звати? ', (name) => {
    // Виведення вітання
    console.log(`Привіт, ${name}!`);

    // Закриття інтерфейсу readline
    rl.close();
});
