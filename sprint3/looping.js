let shoppingList = ["chocolate", "avocado", "butter", "dishwashing liquid", "eggs", "meat"]

function upperCaseShoppingList (shoppingList) {
    for (let i in shoppingList) {
        shoppingList[i] = shoppingList[i].toUpperCase()
    }
    console.log(shoppingList)
}

upperCaseShoppingList(shoppingList)