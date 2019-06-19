const lookupChar = require('../03.char_lookup/lookupChar');
const expect = require('chai').expect;

describe('lookupChar', function () {
    describe('Valid tests:', function () {
        it('expects to return correct char if valid index is passed', function(){
            const result = lookupChar('abc', 2);
            expect(result).to.be.equal('c');
        })
    })

    describe('Invalid tests:', function () {
        it('expects to return "Incorrect index" if negative index is passed', function(){
            const result = lookupChar('abc', -1);
            expect(result).to.be.equal('Incorrect index');
        })

        it('expects to return "Incorrect index" if index bigger then length is passed', function(){
            const result = lookupChar('abc', 3);
            expect(result).to.be.equal('Incorrect index');
        })

        describe('first argument is not a string cases:', function(){
            it('expects to return "undefined" if first argument is number', function(){
                const result = lookupChar(3, 3);
                expect(result).to.be.undefined;
            })

            it('expects to return "undefined" if first argument is array', function(){
                const result = lookupChar([], 0);
                expect(result).to.be.undefined;
            })

            it('expects to return "undefined" if first argument is object', function(){
                const result = lookupChar({}, 0);
                expect(result).to.be.undefined;
            })
        })
       
        describe('second argument is not a string cases:', function(){
            it('expects to return "undefined" if second argument is decimal', function(){
                const result = lookupChar('abc', 3.3);
                expect(result).to.be.undefined;
            })
           
            it('expects to return "undefined" if second argument is string', function(){
                const result = lookupChar('abd', 'a');
                expect(result).to.be.undefined;
            })

            it('expects to return "undefined" if second argument is array', function(){
                const result = lookupChar('abd', []);
                expect(result).to.be.undefined;
            })

            it('expects to return "undefined" if second argument is object', function(){
                const result = lookupChar('abc', {});
                expect(result).to.be.undefined;
            })
        })
    })
})