// constructor function for a Car
// it takes make, model and year
// applies the arguments passed to the new Car instance as make, model and year of a new Object...

function Car (make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

// here we create a new 'instance' or the Car object with these arguments as its properties... 
// we name it myCar

const myCar = new Car("Eagle", "Talon TSi", 1993)

// i need a variable with a name related to andy somehow, this will be equal to a Car - 
//and will be passed some values that will be assigned to the properties of the car



console.log(myCar.make)
console.log(AndysCar.year)