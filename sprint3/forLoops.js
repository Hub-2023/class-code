let shoes = ['nike', 'puma', 'adidas', 'converse']

// shoes.toUpperCase()
// console.log('shoes: ', shoes)

function oldForLoop (array) {
    for (let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase()
    }
}

function forInLoop (array) {
    for (let i in array) {
        array[i] = array[i].toUpperCase()
    }
}

forInLoop(shoes)

// oldForLoop(shoes)
console.log('Capitalised shoes: ', shoes)