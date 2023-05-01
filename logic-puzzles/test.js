// let shoes = ["Nike", "Adidas", "Puma", "Reebok"]

// function getShoeAtIndex (shoes, index) {
//     console.log(shoes[1])
// }

// getShoeAtIndex(shoes, 1)

// function getShoeBrand (shoePrice) {
//     if (shoePrice > 250) {
//         return "Nike"
//     } else if (shoePrice <= 250) {
//         return "Puma"
//     } else {
//         return "invalid input"
//     }
// }

// console.log(getShoeBrand(250))


// let fruit = ["Apples", "Bananas", "Oranges", "Mangoes"]

// function selectFavouriteFruit (fruit, index) {
//     let favouriteFruit = fruit[index]
//     console.log(favouriteFruit)
// }

// selectFavouriteFruit(fruit, 3)

// function addFruit (fruit, newFruit) {
//     fruit.push(newFruit)
//     console.log(fruit)
// }

// addFruit(fruit, "Strawberries")

// let numbers = [1, 2, 3, 4, 5]

// function addNumbers (numbers, newNumber) {
//     numbers.push(newNumber)
//     console.log(numbers)
// }

// addNumbers(numbers, 6)


// --------------------

let results = document.querySelector('.results')
let results2 = document.querySelector('.results2')
let results3 = document.querySelector('.results3')

function addCar (cars, newCar) {
    cars.push(newCar)
    console.log(cars)
    results.textContent = cars
}

function getCar (list, item) {
    console.log(list[item])
    results2.textContent = list[item]
}

function countCars (cars) {
    console.log(cars.length)
    results3.textContent = cars.length
}


let cars = ['tesla', 'jaguar', 'BMW', 'holden']

addCar(cars, 'porche')
getCar(cars, 2)
countCars(cars)

// write the function declarations