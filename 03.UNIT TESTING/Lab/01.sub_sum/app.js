function sumRangeOfNumbers(arr, startIndex, endIndex) {
    const isNotArrayOfNumbers = (arr) => {
        return arr.some(x => x !== +x);
    }

    if (!Array.isArray(arr) || isNotArrayOfNumbers(arr)) {
        return NaN;
    } else if (startIndex < 0 || arr.length <= startIndex) {
        startIndex = 0;
    } else if (endIndex >= arr.length) { // if is < 0 check ?
        endIndex = arr.length - 1;
    }

    const subArr = arr.slice(startIndex, endIndex + 1);
    return subArr.reduce((a, b) => a + b, 0);
}

//console.log(sumRangeOfNumbers(3, 0, 2));