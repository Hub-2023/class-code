// below is a function that is called when the button is clicked.
// it takes in a parameter called 'you' which is a string
// the function will check if the string is 'hungry' or 'sleepy'
// it will then output the appropriate string to the console
// and to the output div in the html

function mood (you) {
    const output = document.getElementById('output');

    if (you == 'hungry') {
        console.log('eat')
        output.textContent = 'eat'
    } else if (you == 'sleepy') {
        console.log('sleep')
        output.textContent = 'sleep'
    } else {
        console.log('keep coding')
    }
}