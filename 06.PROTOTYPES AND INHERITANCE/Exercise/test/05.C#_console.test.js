const assert = require('chai').assert
const Console = require('../05.C#_console');

describe('writeLine method test', () => {
    describe('when 1 argument is passed', () => {
        it('returns correct result when object is passed', () => {
            const expected = '{"a":1,"b":2}';
            const result = Console.writeLine({
                a: 1,
                b: 2
            });
            assert.equal(result, expected);
        })

        it('returns correct result when string is passed', () => {
            const expected = 'abc';
            const result = Console.writeLine('abc');
            assert.equal(result, expected);
        })
    })

    describe('more than 1 arguments are passed', () => {
        
        it('returns correct result if the first is a string and all passed data is correct', () => {
            const expected = 'The sum of 3 and 4 is 7';
            const result = Console.writeLine('The sum of {0} and {1} is {2}', 3, 4, 7);
            assert.equal(result, expected);
        })
        
        it('throws TypeError, when first argument is not a string', () => {
            assert.throws(() => Console.writeLine(123, 1), TypeError);
        })

        it('throws RangeError, when the placeholders are incorrect', () => {
            assert.throws(() => Console.writeLine("The sum of {1} and {2} is {3}", 3, 4, 7),RangeError);
            assert.throws(() => Console.writeLine('First number is {12}', 3), RangeError);
        })

        it('throws RangeError, when the incorrect amount of parameters are passed', () => {
            assert.throws(() => Console.writeLine("The sum of {0} and {1} is {2}", 3, 4), RangeError);
        })
    })
})