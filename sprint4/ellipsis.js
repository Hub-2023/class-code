function avgScore (a, b, c) {
    let avg = (a + b + c) / 3
    console.log('avgScore: ', avg)
}

avgScore(1, 2, 3)

function ellipsisScore (...params) {
    let sum = 0
    for (let param of params) {
        sum = sum + param
    }
     
    let avg = sum / params.length
    console.log('using ellipsis: ', avg)
}

ellipsisScore(1, 2, 3)

function reduceScore (...params) {
    let avg = params.reduce((acc, val) => acc + val, 0) / params.length
    console.log('using the reduce method: ', avg)
}

reduceScore(1, 2, 3)