const minNumber = 100;
const maxNumber = 1000;
const count = 11;

function getRandomArbitrary(min = minNumber, max = maxNumber) {
    if (typeof min !== 'number') {
        min = Number.parseInt(min);
    }
    if (typeof max !== 'number') {
        max = Number.parseInt(max);
    }
    if (isNaN(min) || isNaN(max)) {
        throw new Error("Error: Ошибка входных данных.");
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function checkProbabilityTheory(count = 1) {
    if (typeof count !== 'number') {
        count = Number.parseInt(count);
    }
    if (isNaN(count) || count <= 0) {
        throw new Error("Error: Ошибка входных данных.");
    }

    let pairedNumbers = 0;
    let nonPairedNumbers = 0;

    for (let i = 1; i <= count; i++){
        let randomArbitrary = getRandomArbitrary(minNumber, maxNumber);
        // console.log(randomArbitrary);
        randomArbitrary % 2 ? nonPairedNumbers++ : pairedNumbers++;
    }
    const totalNumbers = pairedNumbers + nonPairedNumbers;
    const percentPaired = (pairedNumbers / totalNumbers * 100).toFixed(0);
    const percentNonPaired = 100 - percentPaired;

    console.log(`Кількість згенерованих чисел: ${totalNumbers}.\n` +
        `Парних чисел: ${pairedNumbers}.\n` +
        `Не парних чисел: ${nonPairedNumbers}.\n` +
        `Відсоток парних чисел: ${percentPaired}%, ` +
        `не парних: ${percentNonPaired}%.\n`)
}


try {
    checkProbabilityTheory(count);
} catch (e) {
    console.error(e.message)
}