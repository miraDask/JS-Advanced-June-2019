const AutoService = require('./02. Auto Service');
const assert = require('chai').assert;

describe('AutoService', () => {
    let service;

    beforeEach(() => {
        service = new AutoService(10);
    })

    describe('constructor...', () => {
        it('creates correct object', () => {
            assert.equal(service.garageCapacity, 10);
            assert.deepEqual(service.workInProgress, []);
            assert.deepEqual(service.backlogWork, []);
        })
    })

    describe('availableSpace getter...', () => {
        it('returns correct value', () => {
            assert.equal(service.availableSpace, 10);
        })
    })

    describe('signupForReview method...', () => {
        it('registered new client in workInProgress register if garage is NOT full', () => {
            service.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });
            const expected = [{
                plateNumber: 'CA1234CA',
                clientName: 'Peter',
                carInfo: {
                    'engine': 'MFRGG23',
                    'transmission': 'FF4418ZZ',
                    'doors': 'broken'
                }
            }]

            assert.deepEqual(service.workInProgress, expected);
        })

        it('registered new client in backlogWork register if garage is full', () => {
            service = new AutoService(1);
            service.signUpForReview('Bob', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });
            service.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });

            const expected = [{
                plateNumber: 'CA1234CA',
                clientName: 'Peter',
                carInfo: {
                    'engine': 'MFRGG23',
                    'transmission': 'FF4418ZZ',
                    'doors': 'broken'
                }
            }]

            assert.deepEqual(service.backlogWork, expected);
        })
    })

    describe('carInfo method...', () => {
        it('returns correct message if current car is not found in registers', () => {
            const result = service.carInfo('MFRGG23', 'Bob');
            const expected = 'There is no car with platenumber MFRGG23 and owner Bob.'

            assert.equal(result, expected);
        })

        it('returns correct object if current car is found in workInProgress registers', () => {
            service.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });

            const expected = {
                plateNumber: 'CA1234CA',
                clientName: 'Peter',
                carInfo: {
                    'engine': 'MFRGG23',
                    'transmission': 'FF4418ZZ',
                    'doors': 'broken'
                }
            }

            assert.deepEqual(service.carInfo('CA1234CA', 'Peter'), expected);
        })

        it('returns correct object if current car is found in backlogWork registers', () => {
            service = new AutoService(1);
            service.signUpForReview('Bob', 'CA1554CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });

            service.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });

            const expected = {
                plateNumber: 'CA1234CA',
                clientName: 'Peter',
                carInfo: {
                    'engine': 'MFRGG23',
                    'transmission': 'FF4418ZZ',
                    'doors': 'broken'
                }
            }

            assert.deepEqual(service.carInfo('CA1234CA', 'Peter'), expected)
        })
    })

    describe('AutoService' , () => {
        let service;
    
        beforeEach(() => {
            service = new AutoService(10);
        })
    
        describe('constructor...', () => {
            it('creates correct object', () => {
                assert.equal(service.garageCapacity, 10);
                assert.deepEqual(service.workInProgress, []);
                assert.deepEqual(service.backlogWork, []);
            })
        })
    
        describe('availableSpace getter...', () => {
            it('returns correct value', () => {
                assert.equal(service.availableSpace, 10);
            })
        })
    
        describe('signupForReview method...', () => {
            it('registered new client in workInProgress register if garage is NOT full', () => {
                service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
                const expected = [{
                        plateNumber : 'CA1234CA',
                        clientName : 'Peter',
                        carInfo : {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}
                }]
    
                assert.deepEqual(service.workInProgress, expected);
            })
    
            it('registered new client in backlogWork register if garage is full', () => {
                service = new AutoService(1);
                service.signUpForReview('Bob', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
                service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
               
                const expected = [{
                        plateNumber : 'CA1234CA',
                        clientName : 'Peter',
                        carInfo : {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}
                }]
    
                assert.deepEqual(service.backlogWork, expected);
            })
        })
    
        describe('repairCar method...', () => {
            it('returns correct message if both registers are empty', () => {
                const expected = 'No clients, we are just chilling...';
                assert.equal(service.repairCar(), expected);
            })

            it('returns correct message if car has no brocken parts', () => {
                service.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
                const expected = 'Your car was fine, nothing was repaired.';
                assert.equal(service.repairCar(), expected);
            })

            it('returns correct message if brocken parts is repaired', () => {
                service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
                const expected = 'Your doors were repaired.';
                assert.equal(service.repairCar(), expected);
            })
        })
    })
})