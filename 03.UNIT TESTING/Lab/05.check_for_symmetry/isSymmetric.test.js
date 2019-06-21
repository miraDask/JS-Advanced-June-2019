const assert = require('chai').assert;
const isSymmetric = require('../05.check_for_symmetry/isSymmetric');

describe('isSymmetric', function () {
    describe('true cases:', function () {
        it('should return true if argument array is symmetric', function () {
            const result = isSymmetric(['a', 1,[], {a:1} ,'b', {a:1},[], 1, 'a']);
            assert.equal(result, true, 'returns false when array is symmetric');

        })

        it('should return true if elements in argument array are different but the array is symmetric', function () {
            const arrayOfStringsResult = isSymmetric(['a', 'b', 'a']);
            const arrayOfNumbersResult = isSymmetric([1, 2, 2, 1]);

            assert.equal(arrayOfStringsResult, true, 'returns false when array is symmetric');
            assert.equal(arrayOfNumbersResult, true, 'returns false when array is symmetric');

        })
    })

    describe('false cases:', function () {
        it('should return false if argument is string', function () {
            const result = isSymmetric('abc');
            assert.equal(result, false, 'returns true when argument is not an array');

        })

        it('should return false if argument is number', function () {
            const result = isSymmetric(123);
            assert.equal(result, false, 'returns true when argument is not an array');

        })

        it('should return false if argument is object', function () {
            const objectResult = isSymmetric({
                a: 1
            });
            assert.equal(objectResult, false, 'returns true when argument is not an array');

        })

        it('should return false if no argument is passed', function () {
            const sequenceOfNumbersResult = isSymmetric();
            assert.equal(sequenceOfNumbersResult, false, 'returns true when no argument is passed');

        })

        it('should return false if argument array is not symmetric', function () {
            const stringsResult = isSymmetric(['a', 'b', 'c']);
            const numberResult = isSymmetric([1, 2, 3]);

            assert.equal(stringsResult, false, 'returns true when array is not symmetric');
            assert.equal(numberResult, false, 'returns true when array is not symmetric');
        })
    })
})