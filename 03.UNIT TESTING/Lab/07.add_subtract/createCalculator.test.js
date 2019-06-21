const expect = require('chai').expect;
const createCalculator = require('../07.add_subtract/createCalculator');


describe('createCalculator:', function () {
    it('returns correct object', function () {
        const calculator = createCalculator();
        expect(calculator).to.own.property('add');
        expect(calculator).to.own.property('subtract');
        expect(calculator).to.own.property('get');

    })

    it('.get should return correct initial value', function () {
        const calculator = createCalculator();
        expect(calculator.get()).to.be.equal(0);
    })

    it('.add should add successfully parsed number to the value', function () {
        const calculator = createCalculator();
        calculator.add(1);
        calculator.add('1');
        const result = calculator.get();
        expect(result).to.be.equal(2);
    })

    it('.add should return "undefined" if not-parsable-to-number argument is passed', function () {
        const calculator = createCalculator();
        const addDouble = calculator.add(1.1);
        const addNonParsableToNumberString = calculator.add('abc');
        const addObject = calculator.add({
            a: 1
        });
        const addArray = calculator.add([123]);

        expect(addDouble).to.be.undefined;
        expect(addNonParsableToNumberString).to.be.undefined;
        expect(addObject).to.be.undefined;
        expect(addArray).to.be.undefined;

    })

    it('.subtract should subtract successfully-parsed number from the value', function () {
        const calculator = createCalculator();
        calculator.add(10);
        calculator.subtract('1');
        calculator.subtract(1);
        const result = calculator.get();
        expect(result).to.be.equal(8);
    })

    it('.subtract should return "undefined" if not-parsable-to-number argument is passed', function () {
        const calculator = createCalculator();
        const subtractDouble = calculator.subtract(1.1);
        const subtractNonParsableToNumberString = calculator.subtract('abc');
        const subtractObject = calculator.subtract({
            a: 1
        });
        const subtractArray = calculator.subtract([123]);

        expect(subtractDouble).to.be.undefined;
        expect(subtractNonParsableToNumberString).to.be.undefined;
        expect(subtractObject).to.be.undefined;
        expect(subtractArray).to.be.undefined;

    })
})