/*function sortArr(numbers, condition) {
    let result = [];

    if (condition === 'asc') {
        result = numbers.sort((a, b) => a - b);
    } else if (condition === 'desc'){
       result = numbers.sort((a, b) => b - a);
    }

    return result;
}*/

/*function sortArr(numbers, condition) {
    return condition === 'asc'
        ? numbers.sort((a, b) => a - b)
        : numbers.sort((a, b) => b - a);
}*/

function sortArr(numbers, condition) {
    let sortOrder = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return numbers.sort(sortOrder[condition]);
}

console.log(sortArr([14, 7, 17, 6, 8], 'desc'));
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));