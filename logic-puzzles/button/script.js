let myButton = document.querySelector('#myButton');
let myMessage = document.querySelector('#myMessage');

myButton.addEventListener('click', function (){
    if (myMessage.textContent === "Tails"){
        myMessage.textContent = "Heads"
    } else {
        myMessage.textContent = "Tails"
    }
})

