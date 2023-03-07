function trafficLight (colour) {
    const display = document.getElementById('display');

    if (colour == 'green') {
        display.textContent = 'go!'
    } else if (colour == 'yellow') {
        display.textContent = 'slow down!'
    } else if (colour == 'red'){
        display.textContent = 'stop!'
    } else {
        display.textContent = 'invalid colour'
    }
}