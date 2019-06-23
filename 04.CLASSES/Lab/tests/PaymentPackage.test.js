const assert = require('chai').assert;
const PaymentPackage = require('../08.PaymentPackage');

describe('PaymentPackage tests:', () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage('payment', 100);
    });

    describe('constructor test: new instance', () => {
        it('should be an object', () => {
            assert.isObject(paymentPackage);
        });

        it('should have the correct function properties', () => {
            assert.isFunction(paymentPackage.toString);
        });

        it('should be created with correct initial value for VAT === 20', () => {
            assert.equal(paymentPackage.VAT, 20);
        });

        it('should be created with correct initial value for active === true', () => {
            assert.equal(paymentPackage.active, true);
        });
    });

    describe('name', () => {
        it('getter should return correct value', () => {
            assert.equal(paymentPackage.name, 'payment');
        });

        it('setter should set correct value', () => {
            paymentPackage.name = 'newPayment';
            assert.equal(paymentPackage.name, 'newPayment');
        });

        it('setter throws Error if invalid value is passed', () => {
            assert.throw(() => new PaymentPackage(2, 2), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage('', 2), 'Name must be a non-empty string');
        });
    });

    describe('value', () => {
        it('getter should return correct value', () => {
            assert.equal(paymentPackage.value, 100);
        });

        it('setter should set correct value', () => {
            paymentPackage.value = 200;
            assert.equal(paymentPackage.value, 200);
        });

        it('setter should set correct value if 0 is passed', function () {
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });

        it('setter throws Error if invalid value is passed', () => {
            assert.throw(() => new PaymentPackage('payment', 'abc'), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('payment', -2), 'Value must be a non-negative number');
        });
    });

    describe('VAT', () => {
        it('setter should set correct value', () => {
            paymentPackage.VAT = 30;
            assert.equal(paymentPackage.VAT, 30);
        });

        it('setter throws Error if invalid value is passed', () => {
            assert.throw(() => paymentPackage.VAT = 'abc', 'VAT must be a non-negative number');
            assert.throw(() => paymentPackage.VAT = -2, 'VAT must be a non-negative number');
        });
    })

    describe('active', () => {
        it('setter should set correct value', () => {
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        });

        it('setter throws Error if invalid value is passed', () => {
            assert.throw(() => paymentPackage.active = 'abc', 'Active status must be a boolean');
        });
    });

    describe('toString', () => {
        it('should return correct result if status is active', () => {
            let result = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ];

            result = result.join('\n');

            assert.equal(result, paymentPackage.toString());
        });

        it('should return correct result if status is inactive', () => {
            paymentPackage.active = false;
            let result = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ];

            result = result.join('\n');

            assert.equal(result, paymentPackage.toString());
        });
    });
});