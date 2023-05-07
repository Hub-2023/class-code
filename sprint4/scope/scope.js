import { input, output } from './dom.js'

function run (inputValue) {
    let a = 1
    let b = 2
    
    function add () {
        return a + b
    }
    
    function multiply (n1, n2) {
        return n1 * n2
    }
    
    let sum = add()
    let product = multiply(inputValue, sum)
    
    function checkAndPrint () {
        if (isNaN(product)){
            output.textContent = "you did not enter a number"
        } else {
            output.textContent = `product: ${product}`
        }
    }

    checkAndPrint()
}

input.addEventListener('keypress', function (event) {
    if (event.key == 'Enter'){
        run(input.value)
    }
})