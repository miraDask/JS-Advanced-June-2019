const expect = require('chai').expect;
const rgbToHexColor = require('../06.rgb_to_hex/rgbToHexColor');

describe('rgbToHexColor', function () {

    it('should return correct result when correct arguments are passed', function () {
        expect(rgbToHexColor(201, 60, 60)).to.be.equal('#C93C3C', 'returns incorrect result');
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000', 'returns incorrect result');
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF', 'returns incorrect result');

    })

    it('should return undefined if no arguments are passed', function () {
        expect(rgbToHexColor()).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if only two arguments are passed', function () {
        const result = rgbToHexColor(60, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if only one argument is passed', function () {
        const result = rgbToHexColor(60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if red is a double', function () {
        const result = rgbToHexColor(201.2, 60, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if red is a string', function () {
        const result = rgbToHexColor('abc', 60, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if red is an object', function () {
        const result = rgbToHexColor({
            red: 201
        }, 60, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if red is an array', function () {
        const result = rgbToHexColor([201], 60, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');

    })

    it('should return undefined if value of red is less than zero', function () {
        const result = rgbToHexColor(-1, 60, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if value of red is greater than 225', function () {
        const result = rgbToHexColor(256, 60, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })


    it('should return undefined if green is a double', function () {
        const result = rgbToHexColor(201, 60.2, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if green is a string', function () {
        const result = rgbToHexColor(201, 'abc', 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if green is an object', function () {
        const result = rgbToHexColor(201, {
            green: 60
        }, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if green is an array', function () {
        const result = rgbToHexColor(201, [60], 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if value of green is less than zero', function () {
        const result = rgbToHexColor(201, -1, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if value of green is greater than 225', function () {
        const result = rgbToHexColor(201, 256, 60);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if blue is a double', function () {
        const result = rgbToHexColor(201, 60, 60.2);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');

    })

    it('should return undefined if blue is a string', function () {
        const result = rgbToHexColor(201, 60, 'abc');
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if blue is an object', function () {
        const result = rgbToHexColor(201, 60, {
            blue: 60
        });
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if blue is an array', function () {
        const result = rgbToHexColor(201, 60, [60]);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })


    it('should return undefined if value of blue is less than zero', function () {
        const result = rgbToHexColor(201, 60, -1);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })

    it('should return undefined if value of blue is greater than 225', function () {
        const result = rgbToHexColor(201, 60, 256);
        expect(result).to.be.equal(undefined, 'result should be undefined, but was not');
    })
})