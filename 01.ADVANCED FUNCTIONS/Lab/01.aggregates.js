function solve(arr) {
    const sum = arr.reduce((a, c) => a + c, 0);
    const minNum = arr.reduce((a, c) => Math.min(a, c), Number.MAX_SAFE_INTEGER);
    const maxNum = arr.reduce((a, c) => Math.max(a, c), Number.MIN_SAFE_INTEGER);
    const product = arr.reduce((a, c) => a * c, 1);
    const joinedArr = arr.reduce((a, c) => a.concat(c), '');

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${minNum}`);
    console.log(`Max = ${maxNum}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${joinedArr}`);
}
solve([2, 3, 10, 5]);