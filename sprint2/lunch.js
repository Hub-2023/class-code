const meals = ['subway', 'sushi', 'kebab']

// ERROR 1 - the line below needs to take meals as a parameter:
function lunch (meals){
    // ERROR 2 - the line below needs to be a 'conditional' statement (if the meal is subway, eat fresh, otherwise don't eat fresh):
    if (meals === 'subway'){
        console.log("eat fresh")
    } else {
        // ERROR 3 - the line below needs double quotes or an escape character:
        console.log("don't eat fresh")
    }
}

// ERRORS 4 & 5 - the line below needs to call the lunch function, with the meals array as an argument:
lunch(meals[1])