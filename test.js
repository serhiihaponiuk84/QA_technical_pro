const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

// Асинхронна функція для використання name поза rl.question
const main = async () => {
    const name = await question('Як тебе звати? ');
    console.log(`Привіт, ${name}!`);

    // Тепер ви можете використовувати name тут або в будь-яких інших місцях після виклику main()

    // Не забудьте закрити інтерфейс readline
    rl.close();
};

main(); // Виклик асинхронної функції
