// windows team:

function multiply (number1, number2) {
    let answer = number1 * number2
    console.log("The answer is: ", answer)
}

// multiply(2, 3)


function mathematicalOperation (number1, number2, number3) {
    let answer = (number1 + number2) * number3
    console.log("The answer is: ", answer)
}

// mathematicalOperation(2, 3, 4)

// ----------------------

function getShoeBrand (shoePrice) {
    if (shoePrice > 250){
        return "Nike"
    } else if (shoePrice <= 250){
        return "Puma"
    } else {
        return "Invalid Input"
    }
}

// console.log(getShoeBrand(250))

// -----------------------

let fruit = ["Apples", "Bananas", "Oranges", "Mangoes"]

function selectFavouriteFruit (fruit, index) {
    let favouriteFruit = fruit[index]
    console.log(favouriteFruit)
}

// selectFavouriteFruit(fruit, 3)

// ------------------------

let shoes = ["Nike", "Puma", "Adidas", "Reebok"]

function getShoeAtIndex (shoes, index) {
    console.log(shoes[index])
}

// ------------------------

let cars = ["Mustang", "Civic", "Corvette"]

function addCar (cars, newCar) {
    cars.unshift(newCar)
    console.log(cars)
}

addCar(cars, "Tesla")