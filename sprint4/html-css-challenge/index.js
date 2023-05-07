const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number

document.querySelector(".rebrand").addEventListener('click', function(){
    document.querySelector(".title").textContent = "Take 2";
    console.log('the button has been clicked!')
})