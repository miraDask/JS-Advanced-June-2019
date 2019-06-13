let add = (function () {
    let sum = 0;
    function add(number) {
        sum += number;
        return add;
    }

    add.toString = function () {
        return sum.toString();
    };

    return add;
})();

console.log(add(1)(6)(-3).toString());