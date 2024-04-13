/* Умови виконання ДЗ
1. Не використовувати функції або інші матеріали які ми не вивчали
2. Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки

Будь ласка, надайте наступні дані для перевірки вашої роботи:
1. Створіть гілку js_homework6.
2. Додати туди ваше домашне завдання
3. Вислати вашу гілку
 */

/* ДЗ 15. Тусувати масив
Опис ДЗ: Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!
Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. Зверніть увагу: не створювати новий
масив, вже перемішаний, а саме перемішувати той, який їй передали.*/

function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // значення j завжди буде від 0 до i включно.
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // for (let i = 0; i < arr.length; i++) {
    //     const j = i + Math.floor(Math.random() * (arr.length - i)); // // значення j завжди буде від i до arr.length - 1 включно
    //     [arr[i], arr[j]] = [arr[j], arr[i]];
    // }
    return arr; // Цей рядок можна видалити, якщо вам не потрібно повертати масив
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
console.log(myBlend(arr));
console.log(arr);

function generateRandomArray(numElements, minValue, maxValue) {
    const arr = [];
    for (let i = 0; i < numElements; i++) {
        const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        arr.push(randomValue);
    }
    return arr;
}

const numElements = 10;
const minValue = -100;
const maxValue = 100;
arr = generateRandomArray(numElements, minValue, maxValue);
console.log(arr);
myBlend(arr);
console.log(arr);

/* ДЗ 16. BigBoss
Опис ДЗ: Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків.
Окрім того, наша компанія продає рішення для організації продажу цих квитків. Таким чином, у нас будуть
клієнти, які придбають наше програмне забезпечення (ПО). По суті, ці клієнти будуть подібні до "дочірніх
компаній" (subCompany), які вже використовують наше ПО для продажу квитків. Крім цього, ці "дочірні
компанії" також можуть стати постачальниками цього рішення, і в цьому випадку вони вже будуть "внучатами
компанії" (subSubCompany), і так далі і далі.

Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим.
Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді
companyName та надавати інформацію про цю subCompany. */

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {

    function collectDetails(company, depth = 0) {
        let Info = "";
        for (const key in company) {
            // if ((key !== 'clients') && (key !== 'partners')) {
            if (typeof company[key] !== 'function' && typeof company[key] !== 'object') {
                Info += key + ": " + company[key] + "\n";
            }
            if (typeof company[key] === 'object' && depth < 2) {
                Info += '\n' + collectDetails(company[key], depth + 1);
            }
            // if (key === 'clients') {
            //     for (const client of company.clients) {
            //         Info += "\n";
            //         for (const key in client) {
            //             if (key !== 'partners') {
            //                 Info += key + ": " + client[key] + "\n";
            //             }
            //         }
            //     }
            // }
            // if (key === 'partners') {
            //     for (const partner of company.partners) {
            //         Info += "\n";
            //         for (const key in partner) {
            //             if (key !== 'partners') {
            //                 Info += key + ": " + partner[key] + "\n";
            //             }
            //         }
            //     }
            // }
        }
        return Info;
    }

    function navigateCompanyStructure(company) {
        if (company.name === companyName) {
            return collectDetails(company);
        }

        let result = null;
        for (const key in company) {
            if (typeof company[key] === 'object') {
                if (Array.isArray(company[key])) {
                    for (const SubCompany of company[key]) {
                        result = navigateCompanyStructure(SubCompany);
                        if (result) return result;
                    }
                }
            }
        }
        // for (const property of ['clients', 'partners']) {
        //     if (company[property]) {
        //         for (const SubCompany of company[property]) {
        //             result = navigateCompanyStructure(SubCompany);
        //             if (result) return result;
        //         }
        //     }
        // }
        return result;
    }
    return navigateCompanyStructure(company) || "Company not found.";
}

console.log(findValueByKey('Клієнт 1'));
console.log(findValueByKey('Велика Компанія'));
console.log(findValueByKey('Клієнт 12'));