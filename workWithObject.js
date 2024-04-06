car = {
    brand: 'Chery',
    model: 'Bonus',
    modelCode: 'A13',
    bodyType: 'Sedan',
    typeofEngine: 'petrol',
    engineCapacity: 1497,
    Transmission: 'manual',
    horsepower: 109,
    acceleration100inSeconds: 16,
    engineCapacity: 1.5,
    driveUnit: 'front',
    fuelConsumption: 7.2,
    countryOfmanufacture: 'China',
    class: 'B',
    numberOfDoors: 4,
    numberOfseats: 5,
    maximumSpeed: 160,
    yearOfProduction: 2014,
    getInfo() {
        Info = "";
        for (let characteristic in this) {
            if (typeof this[characteristic] !== 'function') {
                Info += characteristic + ": " + this[characteristic] + "\n";
            }
        }
        return Info;
    }
}

console.log(car.getInfo());

car.color = 'Red';
console.log(car.getInfo());

car.newProperty = 'Нова властивість!';
console.log(car.getInfo());