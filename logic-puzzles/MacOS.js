// MacOS team:

function driveCar (carBrand, destination) {
    let answer = "Driving a " + carBrand + " to " + destination
    console.log(answer)
}

// driveCar("BMW", "the beach")

// ------------------------

function driveVehicle (vehicle) {
    if (vehicle === "boat"){
        console.log("Driving a boat to the islands")
    } else if (vehicle === "car") {       
        console.log("Driving a car to the city")
    } else {
        console.log("undefined")
    }
}

// driveVehicle("boat")

// ------------------------

let shoes = ["Nike", "Adidas", "Puma", "Reebok"]

function getShoeAtIndex (shoes, index) {
    console.log(shoes[index])
}

// getShoeAtIndex(shoes, 1)

// -----------------------

let fruit = ["Apples", "Bananas", "Oranges", "Mangoes"]

function addFruit (fruit, newFruit) {
    fruit.push(newFruit)
    console.log(fruit)
}

addFruit(fruit, "Strawberries")