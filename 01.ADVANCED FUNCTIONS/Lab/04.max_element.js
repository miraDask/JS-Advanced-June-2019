/*function getMaxNumber(numbers) {
    return numbers.reduce((a, c) => Math.max(a, c),Number.MIN_SAFE_INTEGER );
}*/

function getMaxNumber(numbers) {
    return Math.max.apply(null, numbers);
}

console.log(getMaxNumber([1, 44, 123, 33]));