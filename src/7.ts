{
  // poblem 7
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge(currentYear: number): number {
      return currentYear - this.year;
    }
  }
  const myCar = new Car("Toyota", "Corolla", 2015);
  const carAge = myCar.getCarAge(2024);

//   console.log(`The car's age is: ${carAge} years`);
}
