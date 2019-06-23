const assert = require('chai').assert;
const StringBuilder = require('../07.StringBuilder');

describe('StringBuilder', function () {
    let stringBuilder;

    beforeEach(() => {
        stringBuilder = new StringBuilder('text')
    })

    describe('constructor test: new instance...', function () {
        it('should be created properly if no argument is passed', function () {
            stringBuilder = new StringBuilder();
            assert.equal(stringBuilder._stringArray.join(''), '');
            assert.isObject(stringBuilder);
        })

        it('should be created properly if string argument is passed', function () {
            assert.equal(stringBuilder._stringArray.join(''), 'text');
            assert.isObject(stringBuilder);
        })

        it('should have the correct function properties', function () {
            assert.isFunction(StringBuilder.prototype.append);
            assert.isFunction(StringBuilder.prototype.prepend);
            assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
            assert.isFunction(StringBuilder.prototype.toString);
        })

        it('throws TypeError if non-string argument is passed', function () {
            assert.throws(() => new StringBuilder(32), 'Argument must be string');
            // assert.throws(() => new StringBuilder([]), 'Argument must be string');
            // assert.throws(() => new StringBuilder({}), 'Argument must be string');
            // assert.throws(() => new StringBuilder(false), 'Argument must be string');
        })
    })

    describe('toString method', function () {
        it('returns a string with all elements joined by an empty string', function () {
            const result = stringBuilder.toString();
            assert.isString(result);
            assert.equal(result, 'text');
        })
    })

    describe('append method', function () {
        it('adds passed-in string argument to the end of the storage', function () {
            stringBuilder.append(' appended');
            assert.equal(stringBuilder.toString(), 'text appended');
        })

        it('throws TypeError if non-string argument is passed', function () {
            assert.throws(() => stringBuilder.append(32), 'Argument must be string');
            // assert.throws(() => stringBuilder.append([]), 'Argument must be string');
            // assert.throws(() => stringBuilder.append({}), 'Argument must be string');
            // assert.throws(() => stringBuilder.append(false), 'Argument must be string');
        })
    })

    describe('prepend method', function () {
        it('adds passed-in string argument to the beginning of the storage', function () {
            stringBuilder.prepend('prepend ');
            assert.equal(stringBuilder.toString(), 'prepend text');
        })

        it('throws TypeError if non-string argument is passed', function () {
            assert.throws(() => stringBuilder.prepend(2), 'Argument must be string');
            // assert.throws(() => stringBuilder.prepend([]), 'Argument must be string');
            // assert.throws(() => stringBuilder.prepend({}), 'Argument must be string');
            // assert.throws(() => stringBuilder.prepend(false), 'Argument must be string');
        })
    })

    describe('insertAt method', function () {
        it('insert passed-in string argument at the given index', function () {
            stringBuilder.insertAt('_', 1);
            assert.equal(stringBuilder.toString(), 't_ext');
        })

         it('should have the same strings', function () {
            stringBuilder.insertAt('str', 0)
            let source = stringBuilder._stringArray;
            let expected = Array.from('text');
            expected.splice(0, 0, ...'str');

            for (let i = 0; i < source.length; i++) {
                assert.equal(source[i], expected[i]);
            }
        })

        it('throws TypeError if non-string argument is passed', function () {
            assert.throws(() => stringBuilder.insertAt(2, 2), 'Argument must be string');
            // assert.throws(() => stringBuilder.insertAt([], 2), 'Argument must be string');
            // assert.throws(() => stringBuilder.insertAt({}, 2), 'Argument must be string');
            // assert.throws(() => stringBuilder.insertAt(false, 2), 'Argument must be string');
        })
    })

    describe('remove method', function () {
        it('removes elements from the storage, starting at the given index (inclusive),', function () {
            stringBuilder.remove(1, 2);
            assert.equal(stringBuilder.toString(), 'tt');
        })
    })
})