let arr = [2, 3, 4, 6, 1, 12, 11]

function smallestNumber (arr) {
    // initialise smallest number as the first one in the array
    let smallest = arr[0]

    // loop through the array 
    // and check if the number at the index position you are at is smaller than the 'smallest' one

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        } 
    }
    console.log('smallest number: ', smallest)
}

smallestNumber(arr)

console.log('largest using Math.max: ', Math.max(...arr))