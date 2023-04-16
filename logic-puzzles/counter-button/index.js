let count = 0
document.querySelector(".counter").addEventListener("click", function() {
    // add 1 to the count variable:
    count++
    // log the value of count to the console:
    console.log(`I have been clicked ${count} times`)
    // change the text content of the message:
    document.querySelector(".text").textContent = `I have been clicked ${count} times`
})