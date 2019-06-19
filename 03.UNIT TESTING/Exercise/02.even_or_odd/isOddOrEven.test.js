const expect = require('chai').expect;
const isOddOrEven = require('../02.even_or_odd/isOddOrEven');

describe('Valid:', function () {
    describe('odd', function () {
        it('expect odd when length is 3', function () {
            const expected = 'odd';
            const actual = isOddOrEven('abc');

            expect(actual).to.be.equal(expected);
        })

        it('expect odd when length is 5', function () {
            const expected = 'odd';
            const actual = isOddOrEven('abcde');

            expect(actual).to.be.equal(expected);
        })
    })
    describe('even', function () {
        it('expect even when length is 2', function () {
            const expected = 'even';
            const actual = isOddOrEven('ab');

            expect(actual).to.be.equal(expected);
        })

        it('expect even when length is 6', function () {
            const expected = 'even';
            const actual = isOddOrEven('abcdef');

            expect(actual).to.be.equal(expected);
        })
    })
})

describe('Invalid cases:', function () {
    it('expect undefined when number is passed', function () {
        const actual = isOddOrEven(5);
        expect(actual).to.be.undefined;
    })

    it('expect undefined when object is passed', function(){
        const actual = isOddOrEven([]);
        expect(actual).to.be.undefined;
    })

    it('expect undefined when array is passed', function(){
        const actual = isOddOrEven({});
        expect(actual).to.be.undefined;
    })
})