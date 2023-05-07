const myObject = {car: "Jaguar"}

function checkProperty(object, property){
    const hasProperty = object.hasOwnProperty(property)
    console.log(hasProperty)
}
   
checkProperty(myObject, "car")