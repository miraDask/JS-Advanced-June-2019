const mathEnforcer = require('../04.math_enforcer/mathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer', function () {
    describe('addFive:', function () {
        it('expects to return correct result if integer is passed', function () {

            const positiveNumberResult = mathEnforcer.addFive(5);
            const negativeNumberResult = mathEnforcer.addFive(-2);
            expect(positiveNumberResult).to.be.equal(10);
            expect(negativeNumberResult).to.be.equal(3);
        })

        it('expects to return result with excepted difference if double is passed ', function () {
            const expected = 5.5;
            const resultWithExceptedDifference = mathEnforcer.addFive(0.51);
            expect(resultWithExceptedDifference).to.be.closeTo(expected, 0.01);
        })

        it('expects incorrect result with bigger difference if double is passed ', function () {
            const expected = 5.5;
            const resultWithBiggerDifference = mathEnforcer.addFive(0.52);
            expect(resultWithBiggerDifference).to.not.be.closeTo(expected, 0.01);
        })
        
        it('expects to return "undefined" if non-number is passed', function () {
            const stringResult = mathEnforcer.addFive('abc');
            const arrayResult = mathEnforcer.addFive([1]);
            const objectResult = mathEnforcer.addFive({a:1});
            const noArgumentResult = mathEnforcer.addFive();

            expect(stringResult).to.be.undefined;
            expect(arrayResult).to.be.undefined;
            expect(objectResult).to.be.undefined;
            expect(noArgumentResult).to.be.undefined;
        })
    })

    describe('subtractTen:', function () {
        it('expects to return correct result if integer is passed', function () {

            const positiveNumberResult = mathEnforcer.subtractTen(50);
            const negativeNumberResult = mathEnforcer.subtractTen(-2);
            expect(positiveNumberResult).to.be.equal(40);
            expect(negativeNumberResult).to.be.equal(-12);
        })

        it('expects to return result with excepted difference if double is passed ', function () {
            const expected = 0.5;
            const resultWithExceptedDifference = mathEnforcer.subtractTen(10.51);
            expect(resultWithExceptedDifference).to.be.closeTo(expected, 0.01);
        })

        it('expects incorrect result with bigger difference if double is passed ', function () {
            const expected = 0.5;
            const resultWithBiggerDifference = mathEnforcer.subtractTen(10.52);
            expect(resultWithBiggerDifference).to.not.be.closeTo(expected, 0.01);
        })
        
        it('expects to return "undefined" if non-number is passed', function () {
            const stringResult = mathEnforcer.subtractTen('abc');
            const arrayResult = mathEnforcer.subtractTen([1]);
            const objectResult = mathEnforcer.subtractTen({a:1});
            const noArgumentResult = mathEnforcer.subtractTen();

            expect(stringResult).to.be.undefined;
            expect(arrayResult).to.be.undefined;
            expect(objectResult).to.be.undefined;
            expect(noArgumentResult).to.be.undefined;
        })
    })

    describe('sum:', function () {
        it('expects to return correct result if two integers are passed', function () {
            expect(mathEnforcer.sum(2, 3)).to.be.equal(5);
            expect(mathEnforcer.sum(-2, 3)).to.be.equal(1);
            expect(mathEnforcer.sum(2, -3)).to.be.equal(-1);
        })

        it('expects to return correct result if double and integer are passed', function () {
            const doubleIntResult = 3.3;
            const intDoubleResult = 3.3;
            expect(doubleIntResult).to.be.closeTo(mathEnforcer.sum(1.3, 2), 0.01);
            expect(intDoubleResult).to.be.closeTo(mathEnforcer.sum(1, 2.3), 0.01);
        })
        
        it('expects to return "undefined" if first argument is non-number', function () {
            const stringResult = mathEnforcer.sum('abc', 1);
            const arrayResult = mathEnforcer.sum([1], 1);
            const objectResult = mathEnforcer.sum({a:1}, 1);
            const noArgumentResult = mathEnforcer.sum();

            expect(stringResult).to.be.undefined;
            expect(arrayResult).to.be.undefined;
            expect(objectResult).to.be.undefined;
            expect(noArgumentResult).to.be.undefined;
        })

        it('expects to return "undefined" if second argument is non-number', function () {
            const stringResult = mathEnforcer.sum(1,'abc');
            const arrayResult = mathEnforcer.sum(1, [1]);
            const objectResult = mathEnforcer.sum(1, {a:1});

            expect(stringResult).to.be.undefined;
            expect(arrayResult).to.be.undefined;
            expect(objectResult).to.be.undefined;
        })
    })
})