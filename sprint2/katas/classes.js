const person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    },
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`);
    },
    giveAddress: function() {
      console.log(`I live at ${this.address.street} in ${this.address.city} in ${this.address.state}`);
    }
}

function sayGoodbye(person) {
    return `Goodbye ${person.name}`
}

person.sayHello()
person.giveAddress()
console.log(sayGoodbye(person))