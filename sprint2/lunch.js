const meals = ['subway', 'sushi', 'kebab']

// the line below needs to take meals as a parameter:
function lunch (meals){
    // the line below needs to be a 'conditional' statement (if the meal is subway, eat fresh, otherwise don't eat fresh):
    if (meals[0] === 'subway'){
        console.log("eat fresh")
    } else {
        // the line below needs double quotes or an escape character:
        console.log("don't eat fresh")
    }
}

//the line below needs to call the lunch function, with the meals array as an argument:
lunch(meals[0])