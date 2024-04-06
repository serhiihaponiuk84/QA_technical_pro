let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function () {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let value = Number(this[service].replace("грн", "").trim());
                total += value;
            }
        }
        return total;
    },
    minPrice() {
        let minimum = Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let value = Number(this[service].replace("грн", "").trim());
                if (value < minimum) {
                    minimum = value;
                }
            }
        }
        return minimum;
    },
    maxPrice() {
        let maximum = -Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let value = Number(this[service].replace("грн", "").trim());
                if (value > maximum) {
                    maximum = value;
                }
            }
        }
        return maximum;
    }
};

console.log("Загальна вартість наданих послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуги: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуги: " + services.maxPrice() + " грн\n");

services['Розбити скло'] = "200 грн";
console.log("Загальна вартість наданих послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуги: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуги: " + services.maxPrice() + " грн\n");
