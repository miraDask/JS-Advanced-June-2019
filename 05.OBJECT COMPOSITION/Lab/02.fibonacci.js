function getNextFibonacciCalculator() {
    let current = 0;
    let next = 1;
    return function () {
        const result = current + next;
        current = next;
        next = result;
        return current;
    }
}
//test:
// let getNextFibonacci = getNextFibonacciCalculator();
// console.log(getNextFibonacci());
// console.log(getNextFibonacci());
// console.log(getNextFibonacci());
// console.log(getNextFibonacci());
// console.log(getNextFibonacci());