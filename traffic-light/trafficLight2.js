function trafficLight (colour) {
    if (colour == 'green') {
        console.log('go!')
    } else if (colour == 'yellow') {
        console.log('slow down!')
    } else if (colour == 'red'){
        console.log('stop!')
    } else {
        console.log('invalid colour')
    }
}

trafficLight('green')