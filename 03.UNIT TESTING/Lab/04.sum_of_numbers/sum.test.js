const sum = require('../04.sum_of_numbers/sum').sum;
const expect = require('chai').expect;

describe('sum', function () {
    it('expects to return correct result when array of numbers is passed', function () {
        const result = sum([1, 2, 3]);
        expect(result).to.be.equal(6, 'returns incorrect result');
    })

    it('expects to return 0 if empty array is passed', function () {
        const result = sum([]);
        expect(result).to.be.equal(0, 'returns incorrect result');
    })

    it('expects to throw an error if argument is not an array', function () {
        const resultWithNumbers = function () {
            sum(1, 2, 3)
        };
        const resultWithObject = function () {
            sum({
                a: 1
            })
        };

        expect(resultWithNumbers).to.throw();
        expect(resultWithObject).to.throw();

    })

    it('expects result to be NaN if an array of strings that cannot be parsed to numbers is passed', function () {
        const result = sum(['a', 'b', 'c']);
        expect(result).to.be.equal(NaN, 'result was not Nan');
    })
})