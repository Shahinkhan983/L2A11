class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Car Info:
        Brand: ${this.brand}
        Model: ${this.model}
        Year: ${this.year}`);
    }
}

const myCar = new Car('Toyota', 'Camry', 2020);
myCar.displayInfo();