let obj = { key: 'value' }

const listOfObjects = [
    
    { 
        name: 'John', 
        age: 30, 
        'favorite color': 'blue' 
    },
    { 
        name: 'John', 
        age: 30, 
        'favorite color': 'blue' 
    },
    { 
        name: 'John', 
        age: 30, 
        'favorite color': 'blue' 
    }
]

const myObj = { 
    name: 'John', 
    age: 30, 
    'favorite color': 'blue',
    eat: function () {
        console.log('John is eating food!')
    }
}

// console.log('my object: ', myObj)
// console.log('my object name: ', myObj.name)
// console.log('my object age: ', myObj['age'])
// console.log('my fave colour: ', myObj['favorite color'])

// myObj.eat()

const person = new Object()
person.name = "kieran"
person.sayHi = function () {
    console.log(`Hi ${this.name}, how are you?`)
}

person.sayHi()