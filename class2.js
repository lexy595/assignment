//example of class variable
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }

    start() {
        return `${this.getCarInfo()} is ready for sale.`;
    }
}

const myCar = new Car('RX', 'lexus 350', 2024);
console.log(myCar.getCarInfo()); 
console.log(myCar.start());
