let list = document.getElementById('list')
let button = document.getElementById('button')

button.addEventListener('click', function () {
    list.textContent = 'hey!'
})

button.addEventListener('click', function () {
    let newElement = document.createElement('p')
    list.appendChild(newElement)
})