// getElementById(): Returns a reference to an element with a specified ID.
function changeText() {
    let element = document._______________("myElement");
    element.textContent = "Hello, world!";
}

// getElementsByClassName(): Returns an array-like object of all elements with a specified class name.
function hideElements() {
    let elements = document._______________("hideMe");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

// getElementsByTagName(): Returns an array-like object of all elements with a specified tag name.
function changeTextColor() {
    let elements = document._______________("p");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "red";
    }
}

// querySelector(): Returns the first element that matches a specified CSS selector.
function changeText() {
    let element = document._______________("#myElement");
    element.textContent = "Hello, world!";
}

// classList.add(): Adds one or more class names to an element.
// classList.remove(): Removes one or more class names from an element.
function toggleClass() {
    let element = document.getElementById("myElement");
    if (element.classList(".active")) {
        element.classList._______________(".active");
    } else {
        element.classList._______________(".active");
    }
}

// style.property: Sets or returns the value of a specified style property for an element.
function changeColor() {
    let element = document.getElementById("myElement");
    element._______________.backgroundColor = "blue";
}

// innerHTML(): Sets or returns the HTML content of an element.
function addListItem() {
    var list = document.getElementById("myList");
    list._______________ += "<li>New item</li>";
}