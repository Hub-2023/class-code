function trafficLight (colour) {
    const output = document.getElementById('output');

    if (colour === 'red') {
        output.textContent = 'stop'
    } else if (colour === 'yellow') {
        output.textContent = 'slow down'
    } else if (colour === 'green') {
        output.textContent = 'go'
    } else {
        output.textContent = 'invalid colour'
    }
}