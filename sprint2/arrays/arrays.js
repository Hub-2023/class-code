function selectShoe() {
    const shoes = ['Air Max 95', 'Converse', 'Jandals', 'And1s', 'Pumas']

    const number = document.getElementById('number')
    const index = number.value - 1 // subtract 1 since arrays are zero-indexed
    if (index >= 0 && index < shoes.length) {
      const selectedItem = shoes[index]
      console.log('Selected item:', selectedItem)
    } else {
      console.log('Invalid number')
    }
  }