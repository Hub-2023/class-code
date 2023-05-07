function add (num1, num2) {
    return num1 + num2
}

console.log(add(1, 2))

let numbers = [4, 5, 1, 3]
console.log(Math.max.apply(null, numbers))

let arr2 = [3, 6, 2, 56, 32, 5, 89, 32]
let largest = arr2[0]
for (let i = 0; i < arr2.length; i++) {
    if (largest < arr2[i] ) {
        largest = arr2[i]
    }   
}
console.log(largest)

function evenOrOdd (number) {
    if (number % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}

evenOrOdd(5)

let number = 4
number % 2 === 0 ? console.log('even') : console.log('odd')

let arr = [1 ,2 ,3 ,4]
console.log('third item: ', arr[3])

let Person = {
    name: 'kieran',
    age: 29,
    job: 'web dev teacher',
    hobby: 'DJ'
}

console.log(Person.job)

let list = document.getElementById('list')
let button = document.getElementById('button')

button.addEventListener('click', function () {
    let newElement = document.createElement('li')
    newElement.textContent = 'new item'
    list.appendChild(newElement)
})

let para = document.getElementById('para')
let changeColour = document.getElementById('change-color')

changeColour.addEventListener('click', function () {
    para.style.color = 'blue'
})